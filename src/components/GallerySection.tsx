import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Grid2X2, Heart, Layers, X } from 'lucide-react';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/princessContent';
import { ResilientImage } from './ResilientImage';

type FilterType = 'all' | 'portraits' | 'traditional' | 'outdoor';
type LayoutMode = 'scrapbook' | 'grid';

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All 8 Photos' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'outdoor', label: 'Outdoor' },
];

function getTapeColor(tone: GalleryPhoto['tapeTone']) {
  switch (tone) {
    case 'gold':
      return 'bg-[#E9D7C3]/85';
    case 'sage':
      return 'bg-[#DCE5DC]/85';
    case 'blush':
    default:
      return 'bg-[#F3D4DE]/85';
  }
}

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('scrapbook');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lovedIds, setLovedIds] = useState<string[]>([]);

  const visiblePhotos: GalleryPhoto[] =
    activeFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeFilter);

  const toggleLove = (id: string) => {
    setLovedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, visiblePhotos.length]);

  const activePhoto =
    selectedIndex !== null ? visiblePhotos[selectedIndex] ?? null : null;

  return (
    <section id="gallery" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Controls */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-[#7F3952]">
              03 · Our Little Gallery
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#2F2226] sm:text-4xl lg:text-5xl">
              Eight moments I keep close
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[#6C585F] sm:text-base">
              Tap any Polaroid to view it up close, or switch between scrapbook and clean grid.
            </p>
          </div>

          {/* Interactive Filter Tabs + View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Filter gallery photos"
              className="flex flex-wrap items-center gap-1 rounded-2xl bg-[#F6EFE8] p-1"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setSelectedIndex(null);
                  }}
                  className={`min-h-[40px] rounded-xl px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#7F3952] ${
                    activeFilter === filter.id
                      ? 'bg-[#FFFFFF] text-[#5F263B] shadow-sm'
                      : 'text-[#6C585F] hover:text-[#2F2226]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div
              role="group"
              aria-label="Gallery layout view"
              className="flex items-center gap-1 rounded-2xl bg-[#F6EFE8] p-1"
            >
              <button
                type="button"
                aria-label="Scrapbook Polaroid layout"
                onClick={() => setLayoutMode('scrapbook')}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  layoutMode === 'scrapbook'
                    ? 'bg-[#FFFFFF] text-[#5F263B] shadow-sm'
                    : 'text-[#6C585F] hover:text-[#2F2226]'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Scrapbook</span>
              </button>
              <button
                type="button"
                aria-label="Clean grid layout"
                onClick={() => setLayoutMode('grid')}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  layoutMode === 'grid'
                    ? 'bg-[#FFFFFF] text-[#5F263B] shadow-sm'
                    : 'text-[#6C585F] hover:text-[#2F2226]'
                }`}
              >
                <Grid2X2 className="h-3.5 w-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Polaroid Scrapbook / Clean Editorial Grid */}
        <div
          className={`grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-4 ${
            layoutMode === 'scrapbook' ? 'gap-8 sm:gap-7 lg:gap-7' : 'gap-5 sm:gap-6'
          }`}
        >
          {visiblePhotos.map((item, idx) => {
            const isLoved = lovedIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={layoutMode === 'scrapbook' ? item.offsetClass : ''}
              >
                <div
                  className={`group relative transition-all duration-300 ${
                    layoutMode === 'scrapbook'
                      ? `rounded-sm border border-[#EADCE0] bg-[#FFFFFF] p-3 pb-5 shadow-md shadow-[#7F3952]/10 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-xl ${item.tiltClass}`
                      : 'rounded-3xl border border-[#EADCE0] bg-[#FFFFFF] p-2.5 shadow-sm hover:-translate-y-1 hover:shadow-md'
                  }`}
                >
                  {/* Washi Tape Accent in Scrapbook Mode */}
                  {layoutMode === 'scrapbook' && (
                    <span
                      aria-hidden="true"
                      className={`absolute -top-2.5 left-1/2 z-10 h-5 w-14 -translate-x-1/2 rotate-1 shadow-xs ${getTapeColor(
                        item.tapeTone
                      )}`}
                    />
                  )}

                  {/* Clickable Photo Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    aria-label={`View ${item.momentLabel} up close`}
                    className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952]"
                  >
                    <div
                      className={`w-full overflow-hidden ${
                        layoutMode === 'scrapbook'
                          ? 'aspect-[4/5] rounded-[2px]'
                          : 'aspect-[3/4] rounded-2xl'
                      }`}
                    >
                      <ResilientImage
                        src={item.photo.src}
                        alt={item.photo.alt}
                        objectPosition={item.galleryCrop || item.photo.objectPosition}
                        rotate={item.photo.rotate}
                        scale={item.photo.scale}
                        fallbackTitle={item.momentLabel}
                        className="h-full w-full"
                      />
                    </div>
                  </button>

                  {/* Caption & Heart Action */}
                  <div className="mt-3.5 flex items-start justify-between gap-2 px-1">
                    <div className="min-w-0">
                      <p className="text-xs text-[#6C585F]">
                        {item.momentLabel} · {item.tagLabel}
                      </p>
                      <p className="font-handwritten mt-1 text-xl leading-snug text-[#5F263B]">
                        “{item.caption}”
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={
                        isLoved
                          ? `Remove heart from ${item.momentLabel}`
                          : `Heart ${item.momentLabel}`
                      }
                      aria-pressed={isLoved}
                      onClick={() => toggleLove(item.id)}
                      className="mt-0.5 inline-flex min-h-[36px] min-w-[36px] shrink-0 items-center justify-center rounded-full text-[#B87288] transition-colors hover:bg-[#F8E8EC] hover:text-[#7F3952] focus-visible:outline-2 focus-visible:outline-[#7F3952]"
                    >
                      <Heart
                        className={`h-4 w-4 transition-transform duration-150 ${
                          isLoved
                            ? 'scale-110 fill-[#7F3952] text-[#7F3952]'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && selectedIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.momentLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2226]/85 p-4 backdrop-blur-sm sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#FCF8F4] p-3 shadow-2xl sm:p-5"
            >
              <button
                type="button"
                aria-label="Close photo view"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#FCF8F4]/92 text-[#2F2226] shadow-sm transition-colors hover:bg-[#F8E8EC] focus-visible:outline-2 focus-visible:outline-[#7F3952]"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className={`w-full overflow-hidden rounded-2xl bg-[#F6EFE8] ${
                  activePhoto.photo.rotate === -90 ? 'aspect-[4/3]' : 'aspect-[3/4] max-h-[68vh]'
                }`}
              >
                <ResilientImage
                  src={activePhoto.photo.src}
                  alt={activePhoto.photo.alt}
                  objectPosition={activePhoto.photo.objectPosition}
                  rotate={activePhoto.photo.rotate}
                  scale={activePhoto.photo.scale}
                  fallbackTitle={activePhoto.momentLabel}
                  className="h-full w-full"
                />
              </div>

              <div className="mt-4 flex flex-col justify-between gap-4 px-2 pb-1 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs text-[#6C585F]">
                    {activePhoto.momentLabel} · {activePhoto.tagLabel}
                  </p>
                  <p className="font-handwritten mt-1 text-2xl text-[#5F263B]">
                    {activePhoto.caption}
                  </p>
                </div>

                {visiblePhotos.length > 1 && (
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      type="button"
                      aria-label="Previous photo"
                      onClick={() =>
                        setSelectedIndex(
                          (selectedIndex - 1 + visiblePhotos.length) %
                            visiblePhotos.length
                        )
                      }
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#EADCE0] bg-[#FFFFFF] text-[#5F263B] transition-colors hover:bg-[#F8E8EC]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="tabular-nums px-1 text-xs font-medium text-[#6C585F]">
                      {selectedIndex + 1} / {visiblePhotos.length}
                    </span>
                    <button
                      type="button"
                      aria-label="Next photo"
                      onClick={() =>
                        setSelectedIndex(
                          (selectedIndex + 1) % visiblePhotos.length
                        )
                      }
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#EADCE0] bg-[#FFFFFF] text-[#5F263B] transition-colors hover:bg-[#F8E8EC]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
