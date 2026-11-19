import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, MailOpen } from 'lucide-react';
import { LITTLE_SURPRISES, type SurpriseEnvelope } from '../data/princessContent';

function getEnvelopePalette(tone: SurpriseEnvelope['accentTone']) {
  switch (tone) {
    case 'blush':
      return {
        closedBg: 'bg-gradient-to-br from-[#FBF0F3] to-[#F6E2E8]',
        sealBg: 'bg-[#7F3952] text-[#FCF8F4]',
      };
    case 'rose':
      return {
        closedBg: 'bg-gradient-to-br from-[#FAF0F1] to-[#F2DDE2]',
        sealBg: 'bg-[#944A63] text-[#FCF8F4]',
      };
    case 'lavender':
      return {
        closedBg: 'bg-gradient-to-br from-[#F4EFFA] to-[#EAE2F5]',
        sealBg: 'bg-[#6A4A7A] text-[#FCF8F4]',
      };
    case 'cream':
    default:
      return {
        closedBg: 'bg-gradient-to-br from-[#FCF7F0] to-[#F3E8DC]',
        sealBg: 'bg-[#BA8763] text-[#FCF8F4]',
      };
  }
}

export function LittleSurprisesSection() {
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  const toggleEnvelope = (id: string) => {
    setOpenedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="open-when"
      className="relative bg-gradient-to-b from-[#FCF8F4] via-[#F7F1F6]/65 to-[#FCF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-wide text-[#7F3952]">
              06 · Open When You Want a Smile
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl lg:text-5xl">
              Little envelopes waiting for you
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[#6C585F] sm:text-base">
              Tap any envelope to break the wax seal and pull out the note tucked inside.
            </p>
          </div>

          <p className="tabular-nums text-xs font-medium text-[#6C585F]">
            {openedIds.length} of {LITTLE_SURPRISES.length} opened
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {LITTLE_SURPRISES.map((item, idx) => {
            const isOpen = openedIds.includes(item.id);
            const palette = getEnvelopePalette(item.accentTone);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#D9B8C4] bg-[#FFFFFF] shadow-lg shadow-[#7F3952]/10'
                      : `border-[#EADCE0] ${palette.closedBg} shadow-sm hover:-translate-y-1 hover:shadow-md`
                  }`}
                >
                  {/* Envelope Header / Trigger */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleEnvelope(item.id)}
                    className="flex min-h-[116px] w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#7F3952] sm:p-7"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-[#6C585F]">{item.coverHint}</p>
                      <h3 className="font-display mt-1.5 text-2xl font-semibold text-[#2F2226] sm:text-[1.7rem]">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-[#7F3952]">
                        {isOpen ? 'Tap to tuck note back in' : 'Tap to break seal & read →'}
                      </p>
                    </div>

                    {/* Wax Seal Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 ${
                        palette.sealBg
                      } ${isOpen ? 'scale-95 opacity-85' : 'scale-100'}`}
                    >
                      {isOpen ? (
                        <MailOpen className="h-5 w-5" />
                      ) : (
                        <Mail className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  {/* Hidden Letter Slide-Out Reveal */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="letter"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#F2E5E8] bg-[#FCF9F6] px-6 pb-7 pt-5 sm:px-7">
                          <div className="rounded-2xl border border-[#BA8763]/25 bg-[#FFFFFF] p-5 sm:p-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-[#BA8763]">
                              <Heart className="h-3.5 w-3.5 fill-[#7F3952] text-[#7F3952]" />
                              <span>{item.messageTitle}</span>
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-[#2F2226] sm:text-[15px]">
                              {item.messageBody}
                            </p>

                            <p className="font-handwritten mt-4 text-xl text-[#5F263B]">
                              — {item.closingNote}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
