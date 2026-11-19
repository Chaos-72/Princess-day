import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PRINCESS_PROFILE } from '../data/princessContent';

const NAV_LINKS = [
  { href: '#note', label: 'A Note' },
  { href: '#favourite-girl', label: 'Favourite Girl' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#royal', label: 'Royal' },
  { href: '#open-when', label: 'Open When' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#EADCE0]/80 bg-[#FCF8F4]/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-16 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display whitespace-nowrap shrink-0 text-xl font-semibold tracking-tight text-[#5F263B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7F3952] sm:text-2xl"
        >
          {PRINCESS_PROFILE.brandWordmark}
        </a>

        {/* Zone 2: Clean single-line text links (Desktop) */}
        <nav
          aria-label="Primary sections"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-[#6C585F] transition-colors duration-150 hover:text-[#7F3952] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7F3952]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#final-wish"
            className="hidden min-h-[40px] items-center justify-center rounded-full bg-[#7F3952] px-5 py-2 text-xs font-medium tracking-wide text-[#FCF8F4] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#5F263B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F3952] md:inline-flex"
          >
            Last Surprise
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[#5F263B] transition-colors hover:bg-[#F8E8EC] focus-visible:outline-2 focus-visible:outline-[#7F3952] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile sections"
          className="border-t border-[#EADCE0] bg-[#FCF8F4] px-4 pb-5 pt-2 md:hidden"
        >
          <div className="flex flex-col divide-y divide-[#F2E5E8]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center justify-between text-base font-medium text-[#2F2226] transition-colors hover:text-[#7F3952]"
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="text-xs text-[#BA8763]">
                  →
                </span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#final-wish"
                onClick={handleLinkClick}
                className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#7F3952] px-5 py-2.5 text-sm font-medium text-[#FCF8F4] transition-colors hover:bg-[#5F263B]"
              >
                One Last Surprise
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
