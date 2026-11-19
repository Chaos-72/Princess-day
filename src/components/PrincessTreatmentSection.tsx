import { useState, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Crown } from 'lucide-react';
import { PRINCESS_VOUCHERS, ROYAL_SECTION } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

interface PrincessTreatmentSectionProps {
  onCrownCelebration: () => void;
}

export function PrincessTreatmentSection({
  onCrownCelebration,
}: PrincessTreatmentSectionProps) {
  const [crowned, setCrowned] = useState(false);
  const [selectedTitleId, setSelectedTitleId] = useState(ROYAL_SECTION.titles[0].id);
  const [claimedVouchers, setClaimedVouchers] = useState<string[]>([]);

  const activeTitle =
    ROYAL_SECTION.titles.find((item) => item.id === selectedTitleId) ||
    ROYAL_SECTION.titles[0];

  const handleCrownClick = () => {
    const next = !crowned;
    setCrowned(next);
    if (next) {
      onCrownCelebration();
    }
  };

  const toggleVoucher = (id: string) => {
    setClaimedVouchers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="royal"
      className="relative overflow-hidden bg-gradient-to-b from-[#FCF8F4] via-[#FAF0F2]/80 to-[#FCF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-sm font-medium tracking-wide text-[#7F3952]">
            {ROYAL_SECTION.kicker}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl lg:text-5xl">
            {ROYAL_SECTION.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6C585F] sm:text-base">
            {ROYAL_SECTION.subtext}
          </p>
        </div>

        {/* Royal Portrait (Pink Saree) + Official Certificate */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Arched Pink Saree Royal Portrait with Interactive Crown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[380px] pt-8">
              {/* Interactive Animated Gold Tiara above the Arched Frame */}
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2">
                <motion.div
                  animate={
                    crowned
                      ? { y: 4, scale: 1.12, opacity: 1 }
                      : { y: 0, scale: 0.96, opacity: 0.85 }
                  }
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="flex flex-col items-center"
                >
                  <svg
                    width="58"
                    height="36"
                    viewBox="0 0 64 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 31L4 12L19 21L32 5L45 21L60 12L56 31H8Z"
                      fill={crowned ? '#F5DEC0' : '#FCF8F4'}
                      stroke="#BA8763"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 35H53"
                      stroke="#BA8763"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="32" cy="5" r="2.5" fill="#7F3952" />
                    <circle cx="4" cy="12" r="2" fill="#BA8763" />
                    <circle cx="60" cy="12" r="2" fill="#BA8763" />
                  </svg>
                </motion.div>
              </div>

              {/* Sparkle stars when crowned */}
              <AnimatePresence>
                {crowned && (
                  <>
                    <motion.svg
                      key="sparkle-l"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      style={{ '--twinkle-duration': '2.8s' } as CSSProperties}
                      className="animate-twinkle pointer-events-none absolute -left-3 top-14 z-20 text-[#BA8763]"
                    >
                      <path
                        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
                        fill="currentColor"
                      />
                    </motion.svg>
                    <motion.svg
                      key="sparkle-r"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        '--twinkle-duration': '3.2s',
                        '--twinkle-delay': '0.6s',
                      } as CSSProperties}
                      className="animate-twinkle pointer-events-none absolute -right-2 top-20 z-20 text-[#7F3952]"
                    >
                      <path
                        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
                        fill="currentColor"
                      />
                    </motion.svg>
                  </>
                )}
              </AnimatePresence>

              {/* Arched Royal Portrait Container */}
              <figure
                className={`relative overflow-hidden rounded-t-[190px] rounded-b-[28px] border bg-[#FFFFFF] p-3 shadow-xl transition-all duration-500 ${
                  crowned
                    ? 'border-[#BA8763] shadow-[#BA8763]/20'
                    : 'border-[#EADCE0] shadow-[#7F3952]/10'
                }`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[178px] rounded-b-[20px]">
                  <ResilientImage
                    src={ROYAL_SECTION.royalPhoto.src}
                    alt={ROYAL_SECTION.royalPhoto.alt}
                    objectPosition={ROYAL_SECTION.royalPhoto.objectPosition}
                    scale={ROYAL_SECTION.royalPhoto.scale}
                    fallbackTitle="Her Royal Highness"
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-3 text-center">
                  <p className="font-handwritten text-xl text-[#5F263B]">
                    {ROYAL_SECTION.royalPhotoCaption}
                  </p>
                </figcaption>
              </figure>
            </div>
          </motion.div>

          {/* Right: Royal Certificate of Adoration */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative overflow-hidden rounded-[30px] border border-[#DFC7B7] bg-gradient-to-br from-[#FFFFFF] via-[#FCF6EF] to-[#F8E8EC]/55 p-6 shadow-md shadow-[#BA8763]/10 sm:p-10 lg:col-span-7"
          >
            {/* Inner Gold Stationery Border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-[22px] border border-[#BA8763]/35 sm:inset-4"
            />

            <div className="relative flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8E8EC] text-[#7F3952]">
                <Crown className="h-6 w-6" strokeWidth={1.6} />
              </div>

              <p className="text-xs font-medium tracking-[0.14em] text-[#BA8763]">
                Official Certificate of Princess Day
              </p>

              <p className="mt-4 text-xs text-[#6C585F]">
                Proudly presented to
              </p>

              <h3 className="font-display mt-1 text-3xl font-semibold text-[#2F2226] sm:text-4xl">
                My Forever Princess
              </h3>

              {/* Interactive Royal Title Selector */}
              <div
                role="group"
                aria-label="Choose a royal title"
                className="mt-5 flex flex-wrap justify-center gap-1.5 rounded-2xl bg-[#F6EFE8]/90 p-1"
              >
                {ROYAL_SECTION.titles.map((option, idx) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedTitleId(option.id)}
                    className={`min-h-[36px] rounded-xl px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-[#7F3952] ${
                      selectedTitleId === option.id
                        ? 'bg-[#FFFFFF] text-[#5F263B] shadow-xs'
                        : 'text-[#6C585F] hover:text-[#2F2226]'
                    }`}
                  >
                    Title 0{idx + 1}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTitle.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="mt-4"
                >
                  <p className="font-handwritten text-2xl text-[#7F3952] sm:text-[1.7rem]">
                    {activeTitle.title}
                  </p>

                  <div
                    className="mx-auto my-4 h-px w-24 bg-[#BA8763]/40"
                    aria-hidden="true"
                  />

                  <p className="mx-auto max-w-md text-sm leading-relaxed text-[#4C3B41] sm:text-[15px]">
                    {activeTitle.decree}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Signature & Interactive Crown Seal */}
              <div className="mt-7 flex w-full flex-col items-center justify-between gap-4 border-t border-[#EADCE0] pt-5 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-xs text-[#6C585F]">Signed with love</p>
                  <p className="font-handwritten text-2xl text-[#5F263B]">
                    {ROYAL_SECTION.issuedBy}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCrownClick}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-2.5 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952] ${
                    crowned
                      ? 'bg-[#7F3952] text-[#FCF8F4] shadow-md shadow-[#7F3952]/20'
                      : 'border border-[#BA8763] bg-[#FCF8F4] text-[#5F263B] hover:bg-[#F8E8EC]'
                  }`}
                >
                  {crowned ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Officially Crowned</span>
                    </>
                  ) : (
                    <>
                      <Crown className="h-4 w-4 text-[#BA8763]" />
                      <span>Place Your Crown</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Redeemable Princess Promises */}
        <div className="mt-14 sm:mt-16">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 px-1">
            <h3 className="font-display text-2xl font-semibold text-[#2F2226] sm:text-3xl">
              Royal privileges you can redeem anytime
            </h3>
            <span className="tabular-nums text-xs font-medium text-[#6C585F]">
              {claimedVouchers.length} of {PRINCESS_VOUCHERS.length} claimed
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PRINCESS_VOUCHERS.map((voucher, idx) => {
              const isClaimed = claimedVouchers.includes(voucher.id);

              return (
                <motion.button
                  key={voucher.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => toggleVoucher(voucher.id)}
                  className={`flex min-h-[84px] w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#7F3952] ${
                    isClaimed
                      ? 'border-[#7F3952]/40 bg-[#F8E8EC]/65'
                      : 'border-[#EADCE0] bg-[#FFFFFF] hover:border-[#BA8763]/70 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <p className="font-display text-xl font-semibold text-[#2F2226]">
                      {voucher.title}
                    </p>
                    <p className="mt-1 text-sm text-[#6C585F]">
                      {voucher.description}
                    </p>
                    <p className="mt-2 text-xs text-[#BA8763]">
                      {voucher.validNote}
                    </p>
                  </div>

                  <span
                    className={`inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      isClaimed
                        ? 'bg-[#7F3952] text-[#FCF8F4]'
                        : 'border border-[#EADCE0] bg-[#FCF8F4] text-[#5F263B]'
                    }`}
                  >
                    {isClaimed ? 'Claimed ✓' : 'Claim'}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
