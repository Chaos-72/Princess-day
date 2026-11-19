import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, RotateCcw } from 'lucide-react';
import { SPECIAL_REASONS } from '../data/princessContent';

export function ReasonsSpecialSection() {
  const [revealedIds, setRevealedIds] = useState<string[]>(['reason-1']);

  const toggleCard = (id: string) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allRevealed = revealedIds.length === SPECIAL_REASONS.length;

  const handleToggleAll = () => {
    if (allRevealed) {
      setRevealedIds([]);
    } else {
      setRevealedIds(SPECIAL_REASONS.map((r) => r.id));
    }
  };

  return (
    <section
      id="reasons"
      className="relative bg-gradient-to-b from-[#FCF8F4] via-[#FBF0F3]/60 to-[#FCF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-wide text-[#7F3952]">
              04 · Reasons I Adore You
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl lg:text-5xl">
              Little things I love about you
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#6C585F] sm:text-base">
              Tap each card to uncover a quiet reason you mean so much to me.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="tabular-nums text-xs font-medium text-[#6C585F]">
              {revealedIds.length} of {SPECIAL_REASONS.length} opened
            </span>
            <button
              type="button"
              onClick={handleToggleAll}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#EADCE0] bg-[#FFFFFF] px-4 py-2 text-xs font-medium text-[#5F263B] whitespace-nowrap shrink-0 transition-colors hover:border-[#BA8763] hover:bg-[#F8E8EC]/50 focus-visible:outline-2 focus-visible:outline-[#7F3952]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{allRevealed ? 'Close all cards' : 'Open all cards'}</span>
            </button>
          </div>
        </div>

        {/* Clickable Compliment Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SPECIAL_REASONS.map((reason, idx) => {
            const isRevealed = revealedIds.includes(reason.id);

            return (
              <motion.button
                key={reason.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                aria-expanded={isRevealed}
                onClick={() => toggleCard(reason.id)}
                className={`group relative flex min-h-[212px] w-full flex-col justify-between overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952] sm:p-7 ${
                  isRevealed
                    ? 'border-[#D9B8C4] bg-gradient-to-br from-[#FFFFFF] via-[#FBF2F5] to-[#F7EFE8] shadow-md shadow-[#7F3952]/10'
                    : 'border-[#EADCE0] bg-[#FFFFFF] shadow-sm hover:-translate-y-1 hover:border-[#BA8763]/60 hover:shadow-md'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="tabular-nums text-xs font-medium tracking-wider text-[#BA8763]">
                    {reason.number}
                  </span>
                  <Heart
                    className={`h-4 w-4 transition-all duration-300 ${
                      isRevealed
                        ? 'scale-110 fill-[#7F3952] text-[#7F3952]'
                        : 'text-[#D6B8C2] group-hover:text-[#7F3952]'
                    }`}
                  />
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {!isRevealed ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="my-auto py-4"
                    >
                      <h3 className="font-display text-2xl font-semibold leading-snug text-[#2F2226] sm:text-[1.65rem]">
                        {reason.prompt}
                      </h3>
                      <p className="mt-3 text-xs font-medium text-[#7F3952]">
                        Tap to reveal →
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto py-2"
                    >
                      <p className="text-xs font-medium text-[#7F3952]">
                        {reason.prompt}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#2F2226] sm:text-[15px]">
                        {reason.compliment}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex w-full items-center justify-between pt-2 text-xs text-[#6C585F]">
                  <span className="font-handwritten text-lg text-[#5F263B]">
                    {isRevealed ? reason.footNote : 'Tap to open'}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
