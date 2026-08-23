const fs = require('fs');
const sharp = require('sharp');

async function buildPngIco(pngBuffersWithSizes) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffersWithSizes.length, 4);

  const dirents = [];
  const imageParts = [];
  let offset = 6 + pngBuffersWithSizes.length * 16;

  for (const entry of pngBuffersWithSizes) {
    const dirent = Buffer.alloc(16);
    dirent[0] = entry.size >= 256 ? 0 : entry.size;
    dirent[1] = entry.size >= 256 ? 0 : entry.size;
    dirent[2] = 0;
    dirent[3] = 0;
    dirent.writeUInt16LE(1, 4);
    dirent.writeUInt16LE(32, 6);
    dirent.writeUInt32LE(entry.buf.length, 8);
    dirent.writeUInt32LE(offset, 12);
    dirents.push(dirent);
    imageParts.push(entry.buf);
    offset += entry.buf.length;
  }

  return Buffer.concat([header, ...dirents, ...imageParts]);
}

async function resizeContain(src, size) {
  return sharp(src)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 2, g: 8, b: 16, alpha: 1 },
    })
    .png()
    .toBuffer();
}

(async () => {
  const src = 'kognifx-logo.png';
  const meta = await sharp(src).metadata();
  console.log(meta);

  // Icons live only in /public to avoid Next.js app/ vs public/ route conflicts.
  // Do not write app/favicon.ico, app/icon.png, or app/apple-icon.png.
  await sharp(src).png().toFile('public/kognifx-logo.png');
  await sharp(await resizeContain(src, 512)).toFile('public/icon.png');
  await sharp(await resizeContain(src, 512)).toFile('public/icon-512.png');
  await sharp(await resizeContain(src, 180)).toFile('public/apple-icon.png');
  await sharp(await resizeContain(src, 64)).toFile('public/kognifx-mark.png');

  const icoEntries = [];
  for (const icoSize of [16, 32, 48]) {
    icoEntries.push({
      size: icoSize,
      buf: await resizeContain(src, icoSize),
    });
  }

  const ico = await buildPngIco(icoEntries);
  fs.writeFileSync('public/favicon.ico', ico);

  for (const appIcon of [
    'app/favicon.ico',
    'app/icon.png',
    'app/apple-icon.png',
  ]) {
    if (fs.existsSync(appIcon)) {
      fs.unlinkSync(appIcon);
      console.log('removed conflicting', appIcon);
    }
  }

  console.log({ icoBytes: ico.length, mode: 'public-only-full-logo' });
  console.log('done');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
