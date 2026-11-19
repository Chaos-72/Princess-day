import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';
import { FINAL_SURPRISE } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

interface FinalSurpriseSectionProps {
  onCelebrate: () => void;
}

export function FinalSurpriseSection({ onCelebrate }: FinalSurpriseSectionProps) {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    onCelebrate();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="final-wish" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-[#DFC7D0] bg-gradient-to-br from-[#FBF0F3] via-[#FCF8F4] to-[#F5EDE4] p-7 shadow-lg shadow-[#7F3952]/10 sm:p-12 lg:p-14"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Warm Close-Up Closing Portrait */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[320px]">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 right-3 top-3 rounded-[26px] border border-[#BA8763]/40 bg-[#FFFFFF]/55"
                />
                <div className="relative overflow-hidden rounded-[24px] border border-[#EADCE0] bg-[#FFFFFF] p-2.5 shadow-md shadow-[#7F3952]/10">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[18px]">
                    <ResilientImage
                      src={FINAL_SURPRISE.photo.src}
                      alt={FINAL_SURPRISE.photo.alt}
                      objectPosition={FINAL_SURPRISE.photo.objectPosition}
                      scale={FINAL_SURPRISE.photo.scale}
                      fallbackTitle="Happy Princess Day"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Closing Line & Final Wish Unlock */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <p className="text-sm font-medium tracking-wide text-[#7F3952]">
                {FINAL_SURPRISE.kicker}
              </p>

              <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.14] text-[#2F2226] sm:text-4xl lg:text-[2.75rem]">
                {FINAL_SURPRISE.meaningfulSentence}
              </h2>

              <div
                className="mx-auto my-6 h-px w-16 bg-[#BA8763]/50 lg:mx-0"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait">
                {!unlocked ? (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex flex-col items-center lg:items-start"
                  >
                    <p className="max-w-md text-sm leading-relaxed text-[#6C585F] sm:text-base">
                      One last little note before you close this page.
                    </p>

                    <motion.button
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleUnlock}
                      className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#7F3952] px-8 py-3.5 text-sm font-medium text-[#FCF8F4] shadow-md shadow-[#7F3952]/20 whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#5F263B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952]"
                    >
                      <Heart className="h-4 w-4 fill-[#F8E8EC] text-[#F8E8EC]" />
                      <span>{FINAL_SURPRISE.promptButton}</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="unlocked"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl border border-[#EADCE0] bg-[#FFFFFF]/95 p-6 text-left shadow-sm sm:p-7"
                  >
                    <div className="flex items-center gap-2.5 text-[#7F3952]">
                      <Heart className="h-4 w-4 fill-[#7F3952]" />
                      <h3 className="font-display text-2xl font-semibold text-[#5F263B] sm:text-3xl">
                        {FINAL_SURPRISE.revealedHeadline}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#2F2226] sm:text-base sm:leading-relaxed">
                      {FINAL_SURPRISE.revealedWish}
                    </p>

                    <p className="font-handwritten mt-4 text-2xl text-[#7F3952]">
                      {FINAL_SURPRISE.psLine}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#F2E5E8] pt-5">
                      <button
                        type="button"
                        onClick={onCelebrate}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F8E8EC] px-5 py-2 text-xs font-medium text-[#5F263B] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F1D6DF] focus-visible:outline-2 focus-visible:outline-[#7F3952]"
                      >
                        <Heart className="h-3.5 w-3.5 fill-[#7F3952] text-[#7F3952]" />
                        <span>Shower More Petals</span>
                      </button>

                      <button
                        type="button"
                        onClick={scrollToTop}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#EADCE0] bg-[#FCF8F4] px-5 py-2 text-xs font-medium text-[#6C585F] whitespace-nowrap shrink-0 transition-colors hover:text-[#2F2226] focus-visible:outline-2 focus-visible:outline-[#7F3952]"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                        <span>Read From the Start</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
