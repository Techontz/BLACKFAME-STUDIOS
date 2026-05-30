import { Project, FilmProject, DocumentaryHighlight, PodcastEpisode, Testimonial, ClientBrand } from './types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'photo-vogue',
    category: 'Photography',
    title: 'ELEGANCE IN EXILE',
    tagline: 'High Fashion & Fine Art Portraiture',
    description: 'A study of high fashion shot in contrast against raw brutalist architecture in Berlin. Captured on custom-graded medium format film, exploring high-contrast form and monochromatic shadowplay.',
    year: '2025',
    location: 'Berlin, Germany',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1200',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=90&w=1200',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=90&w=1200',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=90&w=1200'
    ],
    credits: [
      { role: 'Art Director', name: 'Alister Black' },
      { role: 'Stylist', name: 'Isolda Vance' },
      { role: 'Lead Photographer', name: 'Marcus Fame' }
    ]
  },
  {
    id: 'film-afterglow',
    category: 'Films',
    title: 'REVERIE OF THE SOUL',
    tagline: 'Neo-Noir Cinematic Masterpiece',
    description: 'A short film capturing the psychological landscape of a solitary pianist in Tokyo. Blurring the lines between light and deep shadow, set to an ambient classical score.',
    year: '2026',
    location: 'Tokyo, Japan',
    coverImage: 'https://images.unsplash.com/photo-1542204172-e7052809a850?auto=format&fit=crop&q=90&w=1600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Cinematic layout fallback
    credits: [
      { role: 'Director', name: 'Marcus Fame' },
      { role: 'Director of Photography', name: 'Elena Korr' },
      { role: 'Composer', name: 'Yuki Satoru' }
    ]
  },
  {
    id: 'doc-nomads',
    category: 'Documentaries',
    title: 'SILENT HORIZONS',
    tagline: 'Life of the Steppe Herders',
    description: 'An immersive documentary on the final generation of nomadic families in the Mongolian highlands. Commissioned for film festivals, exploring memory, survival, and deep silence.',
    year: '2025',
    location: 'Altai Mountains, Mongolia',
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=90&w=1600',
    credits: [
      { role: 'Director / Writer', name: 'Marcus Fame' },
      { role: 'Field Producer', name: 'Batzorig N.' },
      { role: 'Sound Recordist', name: 'Hanz Zimmermann' }
    ]
  },
  {
    id: 'podcast-chronicles',
    category: 'Podcasts',
    title: 'THE LEGACY TALKS',
    tagline: 'Intimate Deep-Dives With Visionaries',
    description: 'A masterpiece studio talk-show gathering iconic directors, architects, and designers to reveal how they create work that outlasts their lifetime.',
    year: '2026',
    location: 'London Studio, UK',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=1600',
    credits: [
      { role: 'Host', name: 'Marcus Fame' },
      { role: 'Sound Engineer', name: 'David Mercer' }
    ]
  }
];

export const FILM_PORTFOLIO: FilmProject[] = [
  {
    id: 'film-1',
    title: 'KOTODAMA (THE SOUL OF WORDS)',
    genre: 'Cinematic Poem / Avant-Garde',
    duration: '4m 12s',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=90&w=1000',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-lights-moving-on-a-highway-at-night-42232-large.mp4',
    director: 'Marcus Fame'
  },
  {
    id: 'film-2',
    title: 'ECHOES OF THE VALE',
    genre: 'Drama / Atmospheric',
    duration: '18m 45s',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=90&w=1000',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-under-sunlight-and-shadows-42353-large.mp4',
    director: 'Elena Korr'
  },
  {
    id: 'film-3',
    title: 'THE COLD WE STAND ON',
    genre: 'Existential Short / Sci-Fi',
    duration: '12m 00s',
    coverImage: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=90&w=1000',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-starry-night-sky-time-lapse-with-trees-43187-large.mp4',
    director: 'Marcus Fame'
  },
  {
    id: 'film-4',
    title: 'SPEED AND SOLIDITY',
    genre: 'Commercial Production / Porsche concept',
    duration: '1m 30s',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=90&w=1000',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-slow-movement-of-fluid-oil-paint-32832-large.mp4',
    director: 'Marcus Fame'
  }
];

export const PHOTOGRAPHY_GALLERY = [
  {
    id: 'photo-1',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1000',
    title: 'Vogue Editorial',
    subtitle: 'Brutalist Form',
    size: 'tall'
  },
  {
    id: 'photo-2',
    src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=90&w=1000',
    title: 'The Silent Maestro',
    subtitle: 'High-Contrast Monochrome',
    size: 'medium'
  },
  {
    id: 'photo-3',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1000',
    title: 'Brutalist Sanctuary',
    subtitle: 'Concrete Shadowplay',
    size: 'wide'
  },
  {
    id: 'photo-4',
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=90&w=1000',
    title: 'Chromium Curves',
    subtitle: 'Aesthetic Automotive',
    size: 'medium'
  },
  {
    id: 'photo-5',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=90&w=1000',
    title: 'Intimate Rawness',
    subtitle: 'Leica Portraiture',
    size: 'tall'
  },
  {
    id: 'photo-6',
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=90&w=1000',
    title: 'Sculptural Linen',
    subtitle: 'Minimal Styling',
    size: 'wide'
  }
];

export const DOCUMENTARY_HIGHLIGHTS: DocumentaryHighlight[] = [
  {
    id: 'doc-high-1',
    title: 'CHASING WOLVES OF THE ALTITUDE',
    quote: '“In the Altai Mountains, silence is not an absence of noise, but the absolute presence of time.”',
    context: 'Behind the scenes with Mongol horse herders at -40°C.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=90&w=1920',
    location: 'Altai Steppes'
  },
  {
    id: 'doc-high-2',
    title: 'WOOD, STEEL, AND LIFETIMES',
    quote: '“I do not build timekeepers to record hours; I build them to stand witness to generations.”',
    context: 'The life and thoughts of master watchmaker Jean-Luc Gérond.',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=90&w=1920',
    location: 'Geneva, Switzerland'
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-1',
    title: 'THE ARCHITECTURE OF TIMELESSNESS',
    episodeNumber: '08',
    duration: '52m 40s',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=800',
    releasedAt: 'May 15, 2026',
    spotifyUrl: 'https://spotify.com',
    appleUrl: 'https://podcasts.apple.com',
    youtubeUrl: 'https://youtube.com',
    description: 'Marissa Vance discusses how they sculpted building complexes in Tokyo with hundred-year resilience.'
  },
  {
    id: 'ep-2',
    title: 'KODAK VS INTERSTELLAR: STICKING TO ANALOG CELLULOID',
    episodeNumber: '07',
    duration: '1h 14m',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=90&w=800',
    releasedAt: 'April 28, 2026',
    spotifyUrl: 'https://spotify.com',
    appleUrl: 'https://podcasts.apple.com',
    youtubeUrl: 'https://youtube.com',
    description: 'Renowned cinematographer Elias Gray argues why digital sensors can never replicate chemical memory.'
  },
  {
    id: 'ep-3',
    title: 'A24 EDITORIAL STYLE: TELLING STORIES THAT HURT',
    episodeNumber: '06',
    duration: '48m 10s',
    coverImage: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=90&w=800',
    releasedAt: 'March 11, 2026',
    spotifyUrl: 'https://spotify.com',
    appleUrl: 'https://podcasts.apple.com',
    youtubeUrl: 'https://youtube.com',
    description: 'Award-winning screenplay writers describe how to craft tension and cinematic imagery using pure silence.'
  }
];

export const BRANDS: ClientBrand[] = [
  { name: 'A24', logoText: 'A 2 4' },
  { name: 'LEICA', logoText: 'L E I C A' },
  { name: 'PORSCHE', logoText: 'P O R S C H E' },
  { name: 'NETFLIX', logoText: 'N E T F L I X' },
  { name: 'VOGUE', logoText: 'V O G U E' },
  { name: 'KODAK', logoText: 'K O D A K' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "“The cinematic eye of Blackfame Studios is unparalleled. They don't just capture scenes; they construct emotional experiences that linger for weeks. They built our global brand anthem with pure poetic depth.”",
    author: "Alessia DuPont",
    role: "Global Creative Director",
    company: "Leica Europe"
  },
  {
    id: 'test-2',
    quote: "“Working with them felt like co-creating a luxury film piece. They treated our automotive launch like high art, producing a film that won multiple awards and spoke straight to the soul of our enthusiasts.”",
    author: "Ferdinand Weber",
    role: "Director of Brand Heritage",
    company: "Porsche AG"
  },
  {
    id: 'test-3',
    quote: "“Blackfame Studios brought an unmatched editorial seriousness. Their documentary work isn't information—it's legacy, pristine sound design, and staggering composition.”",
    author: "Tenzing Namgyal",
    role: "Senior Curator",
    company: "National Geographic Society"
  }
];
