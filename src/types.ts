export interface Project {
  id: string;
  category: 'Photography' | 'Films' | 'Documentaries' | 'Podcasts';
  title: string;
  tagline: string;
  description: string;
  year: string;
  location?: string;
  coverImage: string;
  galleryImages?: string[];
  credits?: { role: string; name: string }[];
  videoUrl?: string; // Embedded video or interactive trailer layout
  aspectRatioClassName?: string;
}

export interface DocumentaryHighlight {
  id: string;
  title: string;
  quote: string;
  context: string;
  year: string;
  image: string;
  location: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: string;
  duration: string;
  coverImage: string;
  releasedAt: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl: string;
  description: string;
}

export interface FilmProject {
  id: string;
  title: string;
  genre: string;
  duration: string;
  coverImage: string;
  videoUrl: string;
  director: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ClientBrand {
  name: string;
  logoText: string;
}
