import { useState, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Heart } from 'lucide-react';
import { PRINCESS_PROFILE } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export function HeroSection({ onOpenSurprise }: HeroSectionProps) {
  const [whisperShown, setWhisperShown] = useState(false);

  const handleOpen = () => {
    setWhisperShown(true);
    onOpenSurprise();
    const noteEl = document.getElementById('note');
    if (noteEl) {
      setTimeout(() => {
        noteEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 650);
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#FCF8F4] via-[#FBF1F3]/65 to-[#FCF8F4] pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
    >
      {/* Soft radial blush & champagne auras */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#F8E8EC]/75 blur-3xl animate-soft-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#F3E9DF]/80 blur-3xl animate-soft-glow"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            {/* Quiet unboxed date & occasion metadata */}
            <p className="mb-4 text-sm font-medium tracking-wide text-[#7F3952]">
              {PRINCESS_PROFILE.occasionLine}
            </p>

            {/* Delicate crown & gold hairline ornament */}
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-[#BA8763]/60" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4L14.4 9.5L20 8L17 15H7L4 8L9.6 9.5L12 4Z"
                  stroke="#BA8763"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 18H17"
                  stroke="#BA8763"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="h-px w-10 bg-[#BA8763]/60" />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#2F2226] sm:text-5xl lg:text-[3.75rem]">
              {PRINCESS_PROFILE.heroHeadline}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6C585F] sm:text-lg">
              {PRINCESS_PROFILE.heroLine}
            </p>

            {/* Primary Animated CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpen}
                className="group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#7F3952] px-7 py-3 text-sm font-medium text-[#FCF8F4] shadow-md shadow-[#7F3952]/20 whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#5F263B] hover:shadow-lg hover:shadow-[#7F3952]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952]"
              >
                <Heart className="h-4 w-4 fill-[#F8E8EC] text-[#F8E8EC] transition-transform duration-200 group-hover:scale-110" />
                <span>Open Your Surprise</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </motion.button>

              <a
                href="#gallery"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#DFC9D0] bg-[#FCF8F4] px-6 py-2.5 text-sm font-medium text-[#5F263B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#BA8763] hover:bg-[#F8E8EC]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952]"
              >
                See Our Gallery
              </a>
            </div>

            {/* Revealed whisper message after clicking CTA */}
            <AnimatePresence>
              {whisperShown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 flex items-center gap-2.5 text-sm italic text-[#7F3952]"
                >
                  <Heart className="h-3.5 w-3.5 shrink-0 fill-[#BA8763] text-[#BA8763]" />
                  <span>{PRINCESS_PROFILE.heroWhisper}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Prominent Portrait Column — White Sweatshirt Outdoor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-[460px]">
              {/* Subtle champagne twinkle accents */}
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ '--twinkle-duration': '4s', '--twinkle-delay': '0.2s' } as CSSProperties}
                className="animate-twinkle pointer-events-none absolute -left-4 -top-3 z-20 text-[#BA8763]"
              >
                <path
                  d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                style={{ '--twinkle-duration': '3.4s', '--twinkle-delay': '1.2s' } as CSSProperties}
                className="animate-twinkle pointer-events-none absolute -right-3 top-10 z-20 text-[#D1A2B2]"
              >
                <path
                  d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
                  fill="currentColor"
                />
              </svg>

              {/* Soft rose-gold offset editorial frame */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 top-3 left-3 rounded-[28px] border border-[#BA8763]/40 bg-[#F8E8EC]/50 sm:-bottom-4 sm:-right-4 sm:top-4 sm:left-4"
              />

              <figure className="relative overflow-hidden rounded-[26px] border border-[#EADCE0] bg-[#FFFFFF] p-2.5 shadow-xl shadow-[#7F3952]/10 sm:p-3.5">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-[18px]">
                  <ResilientImage
                    src={PRINCESS_PROFILE.heroPhoto.src}
                    alt={PRINCESS_PROFILE.heroPhoto.alt}
                    objectPosition={PRINCESS_PROFILE.heroPhoto.objectPosition}
                    scale={PRINCESS_PROFILE.heroPhoto.scale}
                    priority
                    fallbackTitle="Happy Princess Day"
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-3">
                  <span className="font-handwritten text-xl text-[#5F263B] sm:text-2xl">
                    {PRINCESS_PROFILE.heroCaption}
                  </span>
                  <span className="shrink-0 text-xs text-[#6C585F]">
                    {PRINCESS_PROFILE.heroMeta}
                  </span>
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
