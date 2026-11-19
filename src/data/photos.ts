/**
 * ============================================================================
 * CENTRAL PHOTO ASSET MANIFEST (8 PERSONAL PHOTOS)
 * ============================================================================
 * All 8 real photographs are organized here with tailored framing so every
 * portrait, close-up, traditional outfit, and candid shot looks crisp and
 * natural across mobile and desktop layouts.
 *
 * To replace or add photos later, update the `src` path and optional framing
 * fields in this single file.
 * ============================================================================
 */

export interface PhotoAsset {
  id: string;
  src: string;
  alt: string;
  /** CSS object-position value for optimal portrait/crop framing */
  objectPosition?: string;
  /** Rotate sideways originals upright without altering the source image */
  rotate?: 0 | -90 | 90;
  /** Subtle scale adjustment when trimming screenshot edges */
  scale?: number;
}

export const HER_PHOTOS = {
  /** 1. White sweatshirt outdoor road/cliff photo — Hero portrait */
  whiteSweatshirtOutdoor: {
    id: 'white-sweatshirt-outdoor',
    src: '/assets/aistudio/IMG-20261118-WA0000_e8ab4346.jpg',
    alt: 'Her smiling warmly outdoors in a white sweatshirt and blue jeans along a scenic cliffside road',
    objectPosition: '50% 22%',
    rotate: 0,
    scale: 1,
  },

  /** 2. Pink embroidered saree portrait — Her Royal Highness spotlight */
  pinkSareeRoyal: {
    id: 'pink-saree-royal',
    src: '/assets/aistudio/IMG-20261117-WA0004_0dd7bb51.jpg',
    alt: 'Her glowing in a blush pink embroidered saree and magenta blouse with a soft smile',
    objectPosition: '50% 14%',
    rotate: 0,
    scale: 1,
  },

  /** 3. Sky-blue traditional outfit on marigold-decorated stairs — Featured spotlight */
  blueTraditionalFestive: {
    id: 'blue-traditional-festive',
    src: '/assets/aistudio/Gemini_Generated_Image_r0gwxir0gwxir0gw_3d3a53e5.png',
    alt: 'Her dressed in a sky-blue traditional embroidered outfit and bangles beside marigold garlands',
    objectPosition: '50% 34%',
    rotate: 0,
    scale: 1.04,
  },

  /** 4. Warm close-up portrait in black & gold saree with blue glasses & jhumkas */
  warmSareeCloseup: {
    id: 'warm-saree-closeup',
    src: '/assets/aistudio/Gemini_Generated_Image_c0dxlpc0dxlpc0dx_69c1c8db.png',
    alt: 'Close-up portrait of her smiling softly in blue-rimmed glasses, jhumkas, and a black and gold woven saree',
    objectPosition: '50% 24%',
    rotate: 0,
    scale: 1.04,
  },

  /** 5. Close-up outdoor grass selfie in mint sweatshirt */
  mintGrassSelfie: {
    id: 'mint-grass-selfie',
    src: '/assets/aistudio/Gemini_Generated_Image_agsocqagsocqagso_c81de642.png',
    alt: 'Close-up selfie of her smiling sweetly with her head tilted outdoors on green grass',
    objectPosition: '50% 34%',
    rotate: 0,
    scale: 1.03,
  },

  /** 6. Hillside selfie with pink flowers tucked in her hair (source rotated sideways, displayed upright) */
  hillsideFlowersSelfie: {
    id: 'hillside-flowers-selfie',
    src: '/assets/aistudio/Gemini_Generated_Image_9md88p9md88p9md8_ad0d16f2.png',
    alt: 'Outdoor hillside selfie of her wearing bright pink flowers in her hair against misty green hills',
    objectPosition: '60% 52%',
    rotate: -90,
    scale: 1.04,
  },

  /** 7. Scenic overlook candid looking out over green hills & cloudy sky */
  scenicOverlookCandid: {
    id: 'scenic-overlook-candid',
    src: '/assets/aistudio/Gemini_Generated_Image_f7oxp9f7oxp9f7ox_0bf4bea5.png',
    alt: 'Candid view of her looking out over lush greenery and a quiet cloudy sky with her hand in her hair',
    objectPosition: '50% 74%',
    rotate: 0,
    scale: 1.04,
  },

  /** 8. Casual mirror selfie in mint ribbed crop top & blue jeans */
  mirrorCasualSelfie: {
    id: 'mirror-casual-selfie',
    src: '/assets/aistudio/Gemini_Generated_Image_i1z6x3i1z6x3i1z6_74a2a3ce.png',
    alt: 'Casual mirror selfie of her in a mint green long-sleeve top and high-waisted blue jeans',
    objectPosition: '50% 66%',
    rotate: 0,
    scale: 1.05,
  },
} as const satisfies Record<string, PhotoAsset>;

export type PhotoKey = keyof typeof HER_PHOTOS;
