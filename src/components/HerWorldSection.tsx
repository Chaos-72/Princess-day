import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { FAVOURITE_GIRL_SECTION } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

export function HerWorldSection() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const { featuredSpotlight, companionPortraits } = FAVOURITE_GIRL_SECTION;
  const spotlightLiked = likedIds.includes(featuredSpotlight.id);

  return (
    <section
      id="favourite-girl"
      className="relative bg-gradient-to-b from-[#FCF8F4] via-[#FBF1F4]/65 to-[#FCF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-wide text-[#7F3952]">
              {FAVOURITE_GIRL_SECTION.kicker}
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl lg:text-5xl">
              {FAVOURITE_GIRL_SECTION.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6C585F] sm:text-base">
            {FAVOURITE_GIRL_SECTION.subtext}
          </p>
        </div>

        {/* Secondary Featured Spotlight — Blue Traditional Festive Photo */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 overflow-hidden rounded-[30px] border border-[#EADCE0] bg-[#FFFFFF] p-4 shadow-sm shadow-[#7F3952]/5 sm:p-6 lg:mb-16 lg:p-8"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Blue Traditional Portrait Frame */}
            <div className="relative lg:col-span-6">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#F0E3E7]">
                <ResilientImage
                  src={featuredSpotlight.photo.src}
                  alt={featuredSpotlight.photo.alt}
                  objectPosition={featuredSpotlight.photo.objectPosition}
                  scale={featuredSpotlight.photo.scale}
                  fallbackTitle={featuredSpotlight.title}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <button
                type="button"
                aria-label={
                  spotlightLiked
                    ? `Unlike ${featuredSpotlight.title}`
                    : `Love ${featuredSpotlight.title}`
                }
                aria-pressed={spotlightLiked}
                onClick={() => toggleLike(featuredSpotlight.id)}
                className="absolute right-4 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#FCF8F4]/92 text-[#7F3952] shadow-sm backdrop-blur-sm transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#7F3952]"
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${
                    spotlightLiked
                      ? 'fill-[#7F3952] text-[#7F3952]'
                      : 'text-[#7F3952]'
                  }`}
                />
              </button>
            </div>

            {/* Editorial Story Copy */}
            <div className="flex flex-col justify-center px-1 lg:col-span-6 lg:px-4">
              <p className="text-xs font-medium tracking-wide text-[#BA8763]">
                {featuredSpotlight.momentTag}
              </p>

              <h3 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl">
                {featuredSpotlight.title}
              </h3>

              <div className="my-5 h-px w-14 bg-[#BA8763]/45" aria-hidden="true" />

              <p className="text-base leading-relaxed text-[#4C3B41] sm:text-[17px]">
                {featuredSpotlight.caption}
              </p>

              <p className="font-handwritten mt-6 text-2xl text-[#7F3952]">
                “{featuredSpotlight.handwrittenNote}”
              </p>

              <div className="mt-7 flex items-center gap-3 text-xs text-[#6C585F]">
                <button
                  type="button"
                  onClick={() => toggleLike(featuredSpotlight.id)}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-[#7F3952] ${
                    spotlightLiked
                      ? 'border-[#7F3952] bg-[#F8E8EC] text-[#5F263B]'
                      : 'border-[#EADCE0] bg-[#FCF8F4] text-[#6C585F] hover:border-[#BA8763] hover:text-[#5F263B]'
                  }`}
                >
                  <Heart
                    className={`h-3.5 w-3.5 ${
                      spotlightLiked
                        ? 'fill-[#7F3952] text-[#7F3952]'
                        : 'text-[#BA8763]'
                    }`}
                  />
                  <span>{spotlightLiked ? 'Saved as favourite' : 'Save this moment'}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Companion Asymmetric 3-Portrait Trio */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start lg:gap-10">
          {companionPortraits.map((item, idx) => {
            const isLiked = likedIds.includes(item.id);
            const isMiddle = idx === 1;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col ${isMiddle ? 'md:mt-10' : ''}`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-[#EADCE0] bg-[#FFFFFF] p-2.5 shadow-sm transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-[#7F3952]/10">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <ResilientImage
                      src={item.photo.src}
                      alt={item.photo.alt}
                      objectPosition={item.photo.objectPosition}
                      rotate={item.photo.rotate}
                      scale={item.photo.scale}
                      fallbackTitle={item.title}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-700"
                    />
                  </div>

                  {/* Interactive Heart Button on Photo */}
                  <button
                    type="button"
                    aria-label={isLiked ? `Unlike ${item.title}` : `Love ${item.title}`}
                    aria-pressed={isLiked}
                    onClick={() => toggleLike(item.id)}
                    className="absolute right-5 top-5 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#FCF8F4]/92 text-[#7F3952] shadow-sm backdrop-blur-sm transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#7F3952]"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors ${
                        isLiked ? 'fill-[#7F3952] text-[#7F3952]' : 'text-[#7F3952]'
                      }`}
                    />
                  </button>
                </div>

                {/* Clean Editorial Caption */}
                <div className="mt-4 px-1">
                  <p className="text-xs text-[#BA8763]">{item.momentTag}</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-[#2F2226]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6C585F]">
                    {item.caption}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
