import { HER_PHOTOS, type PhotoAsset } from './photos';

export interface PortraitFeature {
  id: string;
  photo: PhotoAsset;
  cropOverride?: string;
  title: string;
  caption: string;
  momentTag: string;
}

export interface GalleryPhoto {
  id: string;
  photo: PhotoAsset;
  /** Distinct crop position for gallery Polaroids so framing feels fresh */
  galleryCrop?: string;
  caption: string;
  momentLabel: string;
  tagLabel: string;
  tiltClass: string;
  offsetClass: string;
  tapeTone: 'blush' | 'gold' | 'sage';
  category: 'portraits' | 'traditional' | 'outdoor';
}

export interface SpecialReason {
  id: string;
  number: string;
  prompt: string;
  compliment: string;
  footNote: string;
}

export interface RoyalTitleOption {
  id: string;
  title: string;
  decree: string;
}

export interface PrincessVoucher {
  id: string;
  title: string;
  description: string;
  validNote: string;
}

export interface SurpriseEnvelope {
  id: string;
  number: string;
  label: string;
  coverHint: string;
  messageTitle: string;
  messageBody: string;
  closingNote: string;
  accentTone: 'blush' | 'rose' | 'cream' | 'lavender';
}

export const PRINCESS_PROFILE = {
  brandWordmark: 'For My Princess',
  occasionLine: 'November 18 · Happy Princess Day',
  heroHeadline: 'Happy Princess Day, my favourite girl.',
  heroLine:
    'I made this little corner just for you — to celebrate your smile, your warmth, and how effortlessly you make my days brighter.',
  heroWhisper: 'Every moment with you is my favourite part of the day.',
  heroPhoto: HER_PHOTOS.whiteSweatshirtOutdoor,
  heroCaption: 'The smile that still makes my heart skip.',
  heroMeta: 'Always my favourite view',
};

export const LITTLE_NOTE = {
  kicker: '01 · A Little Note',
  heading: 'Just something I wanted you to know today',
  paragraphs: [
    'On ordinary days I might not pause long enough to say it properly, so I am using Princess Day as my excuse.',
    'You make life feel gentler just by being in it. Whether you are dressed up in a saree, laughing over something tiny, or just sitting beside me in a sweatshirt, you are always my favourite person in the room.',
    'You deserve to feel cherished every single day — not just today. Thank you for being so wonderfully, softly, completely you.',
  ],
  signOff: 'Always yours,',
  signature: 'Your biggest fan',
  keepsakePhoto: HER_PHOTOS.mintGrassSelfie,
  keepsakeCaption: 'Still my favourite smile.',
};

export const FAVOURITE_GIRL_SECTION = {
  kicker: '02 · My Favourite Girl',
  heading: 'Every version of you is my favourite',
  subtext:
    'From dressed-up festive evenings to breezy hillside afternoons, you somehow make every frame look like a keepsake.',
  featuredSpotlight: {
    id: 'blue-festive-spotlight',
    photo: HER_PHOTOS.blueTraditionalFestive,
    momentTag: 'Festive grace · Timeless',
    title: 'Soft magic in sky blue',
    caption:
      'Marigold garlands, delicate bangles, and that quiet little smile — honestly, you looked straight out of a storybook here.',
    handwrittenNote: 'Couldn’t stop staring at this one.',
  },
  companionPortraits: [
    {
      id: 'flowers-in-hair',
      photo: HER_PHOTOS.hillsideFlowersSelfie,
      title: 'Flowers & fresh air',
      caption: 'Pink petals tucked in your hair and misty hills behind you — pure sunshine.',
      momentTag: 'Hillside candid',
    },
    {
      id: 'casual-charm',
      photo: HER_PHOTOS.mirrorCasualSelfie,
      title: 'Effortlessly cute',
      caption: 'Even a quick casual mirror snap turns into one of the photos I never delete.',
      momentTag: 'Everyday you',
    },
    {
      id: 'quiet-sky',
      photo: HER_PHOTOS.scenicOverlookCandid,
      title: 'Calm in every frame',
      caption: 'Breeze in your hair, clouds above, and a quiet peace you carry wherever you go.',
      momentTag: 'Open skies',
    },
  ] satisfies PortraitFeature[],
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-white-sweatshirt',
    photo: HER_PHOTOS.whiteSweatshirtOutdoor,
    galleryCrop: '50% 18%',
    caption: 'My favourite person on any road.',
    momentLabel: 'Outdoor stroll',
    tagLabel: 'Candid',
    tiltClass: 'md:-rotate-2',
    offsetClass: '',
    tapeTone: 'blush',
    category: 'outdoor',
  },
  {
    id: 'gal-pink-saree',
    photo: HER_PHOTOS.pinkSareeRoyal,
    galleryCrop: '50% 16%',
    caption: 'Pretty in pink doesn’t even cover it.',
    momentLabel: 'Blush saree',
    tagLabel: 'Royal',
    tiltClass: 'md:rotate-1',
    offsetClass: 'md:mt-6',
    tapeTone: 'gold',
    category: 'traditional',
  },
  {
    id: 'gal-warm-closeup',
    photo: HER_PHOTOS.warmSareeCloseup,
    galleryCrop: '50% 22%',
    caption: 'Jhumkas, glasses, and that soft smile.',
    momentLabel: 'Warm portrait',
    tagLabel: 'Close-up',
    tiltClass: 'md:-rotate-1',
    offsetClass: '',
    tapeTone: 'blush',
    category: 'portraits',
  },
  {
    id: 'gal-hillside-flowers',
    photo: HER_PHOTOS.hillsideFlowersSelfie,
    galleryCrop: '60% 52%',
    caption: 'Still deciding what’s prettier — the flowers or you.',
    momentLabel: 'Hillside breeze',
    tagLabel: 'Outdoor',
    tiltClass: 'md:rotate-2',
    offsetClass: 'md:-mt-2',
    tapeTone: 'sage',
    category: 'outdoor',
  },
  {
    id: 'gal-blue-traditional',
    photo: HER_PHOTOS.blueTraditionalFestive,
    galleryCrop: '50% 30%',
    caption: 'Shining brighter than every festive light.',
    momentLabel: 'Marigold evening',
    tagLabel: 'Traditional',
    tiltClass: 'md:-rotate-2',
    offsetClass: 'md:mt-4',
    tapeTone: 'gold',
    category: 'traditional',
  },
  {
    id: 'gal-mint-grass',
    photo: HER_PHOTOS.mintGrassSelfie,
    galleryCrop: '50% 30%',
    caption: 'Instant mood booster, every single time.',
    momentLabel: 'Sweet selfie',
    tagLabel: 'Close-up',
    tiltClass: 'md:rotate-1',
    offsetClass: '',
    tapeTone: 'blush',
    category: 'portraits',
  },
  {
    id: 'gal-scenic-overlook',
    photo: HER_PHOTOS.scenicOverlookCandid,
    galleryCrop: '50% 72%',
    caption: 'Quiet skies and my favourite silhouette.',
    momentLabel: 'Above the hills',
    tagLabel: 'Scenic',
    tiltClass: 'md:-rotate-1',
    offsetClass: 'md:mt-3',
    tapeTone: 'sage',
    category: 'outdoor',
  },
  {
    id: 'gal-mirror-casual',
    photo: HER_PHOTOS.mirrorCasualSelfie,
    galleryCrop: '50% 62%',
    caption: 'Cute without even trying.',
    momentLabel: 'Mirror snap',
    tagLabel: 'Casual',
    tiltClass: 'md:rotate-2',
    offsetClass: 'md:-mt-1',
    tapeTone: 'gold',
    category: 'portraits',
  },
];

export const SPECIAL_REASONS: SpecialReason[] = [
  {
    id: 'reason-1',
    number: '01',
    prompt: 'Your effortless smile',
    compliment:
      'The second you smile — especially that shy little one — my whole day feels lighter.',
    footNote: 'My favourite sight',
  },
  {
    id: 'reason-2',
    number: '02',
    prompt: 'The warmth you carry',
    compliment:
      'You have the gentlest heart. Just talking to you after a tiring day feels like exhaling.',
    footNote: 'Pure comfort',
  },
  {
    id: 'reason-3',
    number: '03',
    prompt: 'How pretty you look without trying',
    compliment:
      'In a pink saree, a festive blue dupatta, or a simple white sweatshirt — you always leave me speechless.',
    footNote: 'Every single time',
  },
  {
    id: 'reason-4',
    number: '04',
    prompt: 'Your little habits',
    compliment:
      'The way you tuck flowers in your hair, tilt your head in photos, and get excited over small things.',
    footNote: 'Never change',
  },
  {
    id: 'reason-5',
    number: '05',
    prompt: 'How easy everything feels with you',
    compliment:
      'Even doing nothing special feels like a memory I want to keep as long as you are there.',
    footNote: 'Best company',
  },
  {
    id: 'reason-6',
    number: '06',
    prompt: 'Simply being you',
    compliment:
      'You never have to pretend or try to impress me. Exactly who you are is who I fell for.',
    footNote: 'Always & forever',
  },
];

export const ROYAL_SECTION = {
  kicker: '05 · Her Royal Highness',
  heading: 'Officially crowned, today & always',
  subtext:
    'Because a blush pink saree, a radiant smile, and a heart like yours obviously deserve a crown and an official certificate.',
  royalPhoto: HER_PHOTOS.pinkSareeRoyal,
  royalPhotoCaption: 'Her Royal Highness, looking effortlessly dreamy in pink.',
  titles: [
    {
      id: 'princess-heart',
      title: 'Her Royal Highness, Princess of My Heart',
      decree:
        'Entitled to endless patience, warm hugs on demand, zero bad days alone, and my full attention whenever she wants it.',
    },
    {
      id: 'queen-smiles',
      title: 'Duchess of Sweetest Smiles & Pink Sarees',
      decree:
        'Officially permitted to steal every compliment in the room, pick the food every time, and be spoiled without question.',
    },
    {
      id: 'forever-favourite',
      title: 'Keeper of My Favourite Moments',
      decree:
        'Granted lifetime priority for forehead kisses, random surprises, and someone who will always be proud of her.',
    },
  ] satisfies RoyalTitleOption[],
  issuedBy: 'Yours Always',
};

export const PRINCESS_VOUCHERS: PrincessVoucher[] = [
  {
    id: 'voucher-date',
    title: 'Dinner & Dessert — Your Pick',
    description: 'Whatever you are craving, dress up or stay comfy — it is completely on me.',
    validNote: 'Redeem anytime · Never expires',
  },
  {
    id: 'voucher-pamper',
    title: 'Zero-Stress Princess Evening',
    description: 'Your favourite show, warm snacks, full attention, and zero chores allowed.',
    validNote: 'Valid on tired days & weekends',
  },
  {
    id: 'voucher-flowers',
    title: 'Fresh Flowers Just Because',
    description: 'Soft blooms delivered on a completely random day just to see you smile.',
    validNote: 'Always in season',
  },
  {
    id: 'voucher-hugs',
    title: 'Unlimited Warm Hugs',
    description: 'Claimable mid-sentence, before goodbye, or whenever you want to feel held.',
    validNote: 'Infinite balance',
  },
];

export const LITTLE_SURPRISES: SurpriseEnvelope[] = [
  {
    id: 'surprise-1',
    number: '01',
    label: 'Open when you miss me',
    coverHint: 'Envelope 01 · Sealed with a heart',
    messageTitle: 'Never far from you',
    messageBody:
      'Even on our busiest days, you are still the first person I want to tell everything to. Text me right now — I am probably already thinking about you.',
    closingNote: 'Counting down till I see you',
    accentTone: 'blush',
  },
  {
    id: 'surprise-2',
    number: '02',
    label: 'Open when you forget how pretty you are',
    coverHint: 'Envelope 02 · A true reminder',
    messageTitle: 'Scroll back up for proof',
    messageBody:
      'Not just in your dressed-up saree photos, either — your glasses, your messy-hair selfies, your sleepy smile. You are genuinely breathtaking to me.',
    closingNote: 'Every single day',
    accentTone: 'rose',
  },
  {
    id: 'surprise-3',
    number: '03',
    label: 'Open when you need a quick smile',
    coverHint: 'Envelope 03 · Little pep talk',
    messageTitle: 'I am so proud of you',
    messageBody:
      'Whatever you are handling right now, take a slow breath. You are doing better than you think, and you never have to carry a heavy day by yourself.',
    closingNote: 'Always in your corner',
    accentTone: 'cream',
  },
  {
    id: 'surprise-4',
    number: '04',
    label: 'Open for a little promise',
    coverHint: 'Envelope 04 · Pinky promise',
    messageTitle: 'So much more ahead for us',
    messageBody:
      'More scenic drives, more photos I will treasure forever, more laughs until our cheeks hurt, and a hundred more reasons to treat you like my princess.',
    closingNote: 'Cannot wait for all of it',
    accentTone: 'lavender',
  },
];

export const FINAL_SURPRISE = {
  kicker: '07 · One Last Surprise',
  photo: HER_PHOTOS.warmSareeCloseup,
  meaningfulSentence:
    'Out of everyone in the world, I am endlessly grateful it is you I get to love.',
  promptButton: 'Open Your Final Wish',
  revealedHeadline: 'Happy Princess Day, my love.',
  revealedWish:
    'I hope this little gift made you smile today — because making you feel loved, beautiful, and cherished is my favourite thing to do.',
  psLine: 'P.S. Come claim your Princess Day hug right now.',
};
