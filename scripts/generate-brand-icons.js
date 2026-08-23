const sharp = require('sharp');

(async () => {
  const src = 'kognifx-logo.png';
  const meta = await sharp(src).metadata();
  console.log(meta);

  const w = meta.width;
  const h = meta.height;

  // Tight square around the stylized K at the top of the stacked logo.
  const size = Math.round(h * 0.42);
  const left = Math.max(0, Math.round((w - size) / 2));
  const top = Math.round(h * 0.03);

  await sharp(src)
    .extract({ left, top, width: size, height: size })
    .resize(512, 512, {
      fit: 'cover',
      background: { r: 2, g: 8, b: 16, alpha: 1 },
    })
    .png()
    .toFile('app/icon.png');

  await sharp('app/icon.png').resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp('app/icon.png').resize(64, 64).png().toFile('public/kognifx-mark.png');
  await sharp(src).png().toFile('public/kognifx-logo.png');

  console.log({ size, left, top });
  console.log('done');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
