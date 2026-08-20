import { SplineFrame } from '@/components/landing/spline-frame';

export default function SideUnik() {
  return (
    <section>
      <div className='mx-auto w-full max-w-screen-xl px-6 py-24 md:px-8 lg:py-28'>
        <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:gap-16'>
          <div className='pointer-events-none md:pointer-events-auto relative mx-auto w-full max-w-[36rem] overflow-hidden rounded-2xl bg-background/40'>
            <div className='h-[24rem] w-full overflow-hidden sm:h-[28rem] lg:h-[30rem]'>
              <div className='h-full w-full'>
                <SplineFrame
                  scene='https://prod.spline.design/S9N9kEGI69dOpgLf/scene.splinecode'
                  lazy
                  inViewAmount={0.35}
                  inViewMargin='120px 0px'
                />
              </div>
            </div>
            <div className='pointer-events-none absolute bottom-0 right-0 z-10 h-32 w-72 rounded-tl-[2.5rem] bg-background sm:h-36 sm:w-80' />
          </div>
          <div className='mx-auto w-full max-w-2xl lg:mx-0'>
            <h2 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-2 text-4xl font-medium leading-[0.95] tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-6xl'>
              We clarify, structure, and then build. Cognition is the new
              currency, AI enhances it, and systems apply it.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
