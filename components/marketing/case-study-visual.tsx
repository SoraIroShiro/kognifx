import { cn } from '@/lib/utils';
import Image from 'next/image';

type CaseStudyVisualProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  /** Default cover; use contain for diagrams/architecture visuals. */
  objectFit?: 'cover' | 'contain';
};

export function CaseStudyVisual({
  src,
  alt,
  caption,
  className,
  priority = false,
  objectFit = 'cover',
}: CaseStudyVisualProps) {
  return (
    <figure className={cn('space-y-3', className)}>
      <div className='overflow-hidden rounded-2xl border border-border/70 bg-background/50 shadow-sm'>
        <div className='relative aspect-[16/10] w-full bg-muted/20 sm:aspect-video'>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn(
              objectFit === 'contain' ? 'object-contain p-2 sm:p-4' : 'object-cover'
            )}
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px'
          />
        </div>
      </div>
      {caption ? (
        <figcaption className='text-sm leading-relaxed text-muted-foreground'>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
