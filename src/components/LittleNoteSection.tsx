import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { LITTLE_NOTE } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

export function LittleNoteSection() {
  const [heartStamped, setHeartStamped] = useState(false);

  return (
    <section id="note" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-[#EADCE0] bg-[#FFFFFF] p-6 shadow-sm shadow-[#7F3952]/5 sm:p-10 lg:p-14"
        >
          {/* Subtle inner champagne stationery hairline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[22px] border border-[#BA8763]/20 sm:inset-5"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Heartfelt Letter Column */}
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#7F3952]">
                {LITTLE_NOTE.kicker}
              </p>

              <h2 className="font-display mt-2.5 text-3xl font-semibold text-[#2F2226] sm:text-4xl">
                {LITTLE_NOTE.heading}
              </h2>

              <div className="my-6 h-px w-16 bg-[#BA8763]/50" aria-hidden="true" />

              <div className="space-y-4 text-base leading-relaxed text-[#4C3B41] sm:text-[17px] sm:leading-[1.75]">
                {LITTLE_NOTE.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#F2E5E8] pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm text-[#6C585F]">{LITTLE_NOTE.signOff}</p>
                  <p className="font-handwritten mt-0.5 text-2xl text-[#5F263B] sm:text-3xl">
                    {LITTLE_NOTE.signature}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setHeartStamped((prev) => !prev)}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952] ${
                    heartStamped
                      ? 'border-[#7F3952] bg-[#F8E8EC] text-[#5F263B]'
                      : 'border-[#EADCE0] bg-[#FCF8F4] text-[#6C585F] hover:border-[#BA8763] hover:text-[#5F263B]'
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 transition-transform duration-200 ${
                      heartStamped
                        ? 'scale-110 fill-[#7F3952] text-[#7F3952]'
                        : 'text-[#BA8763]'
                    }`}
                  />
                  <span>
                    {heartStamped ? 'Heart stamped on this note' : 'Stamp with a heart'}
                  </span>
                </button>
              </div>
            </div>

            {/* Tucked Keepsake Close-Up Selfie Print */}
            <div className="flex justify-center lg:col-span-5">
              <figure className="relative w-full max-w-[300px] rotate-1 rounded-sm border border-[#EADCE0] bg-[#FCF8F4] p-3 pb-5 shadow-md shadow-[#7F3952]/10 transition-transform duration-300 hover:rotate-0">
                {/* Delicate translucent blush washi tape */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-[#F1D4DE]/85 shadow-xs"
                />

                <div className="aspect-[4/5] w-full overflow-hidden rounded-[2px]">
                  <ResilientImage
                    src={LITTLE_NOTE.keepsakePhoto.src}
                    alt={LITTLE_NOTE.keepsakePhoto.alt}
                    objectPosition={LITTLE_NOTE.keepsakePhoto.objectPosition}
                    scale={LITTLE_NOTE.keepsakePhoto.scale}
                    fallbackTitle="My favourite smile"
                    className="h-full w-full"
                  />
                </div>

                <figcaption className="mt-3 flex items-center justify-between px-1">
                  <span className="font-handwritten text-xl text-[#5F263B]">
                    {LITTLE_NOTE.keepsakeCaption}
                  </span>
                  <Heart
                    aria-hidden="true"
                    className="h-3.5 w-3.5 fill-[#DFB6C4] text-[#DFB6C4]"
                  />
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
