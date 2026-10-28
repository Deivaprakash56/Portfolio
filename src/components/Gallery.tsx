import { gallery, type Photo } from '../data/content'
import { Section } from './Section'

const half = Math.ceil(gallery.length / 2)
const rows: { photos: Photo[]; direction: 'left' | 'right' }[] = [
  { photos: gallery.slice(0, half), direction: 'right' },
  { photos: gallery.slice(half), direction: 'left' },
]

function MarqueeRow({ photos, direction }: { photos: Photo[]; direction: 'left' | 'right' }) {
  // The list is rendered twice so the strip can loop without a visible seam.
  return (
    <div className="marquee group/row overflow-hidden">
      <ul className={`marquee-track flex w-max gap-5 ${direction === 'right' ? 'marquee-right' : 'marquee-left'}`}>
        {[...photos, ...photos].map((shot, i) => (
          <li
            key={`${shot.src}-${i}`}
            aria-hidden={i >= photos.length}
            className="group relative h-60 w-[17rem] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-dark-elevated md:h-72 md:w-[21rem]"
          >
            <img
              src={shot.src}
              alt={i >= photos.length ? '' : shot.alt}
              style={{ objectPosition: shot.position }}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pt-12 pb-4 text-sm font-medium text-white">
              {shot.caption}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Field gallery"
      title="Robots I’ve put to work."
      description="Pallet movers, mobile manipulators, heavy-payload AMRs and more, from test bay to factory floor."
      dark
      className="overflow-x-clip"
    >
      <div className="mx-[calc(50%-50vw)] space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {rows.map((row) => (
          <MarqueeRow key={row.direction} photos={row.photos} direction={row.direction} />
        ))}
      </div>
    </Section>
  )
}
