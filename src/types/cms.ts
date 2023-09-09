/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    media: Media;
    podcasts: Podcast;
    books: Book;
    users: User;
  };
  globals: {
    homepage: Homepage;
    aboutpage: Aboutpage;
    podcastspage: Podcastspage;
    mediapage: Mediapage;
    bookspage: Bookspage;
    privacypolicypage: Privacypolicypage;
    navigation: Navigation;
    footer: Footer;
    favicon: Favicon;
    socials: Social;
    settings: Setting;
    'work-summary': WorkSummary;
  };
}
export interface Media {
  id: string;
  altText?: string;
  imagekit?: {
    fileId?: string;
    thumbnailUrl?: string;
    name?: string;
    url?: string;
  };
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Podcast {
  id: string;
  title: string;
  description: string;
  summary: string;
  image: string | Media;
  presentedBy?: string;
  moderator?: string;
  linkToListen?: {
    label?: string;
    url?: string;
    newTab?: boolean;
  };
  episodes?: {
    title: string;
    presentedBy: string;
    moderator: string;
    date: string;
    duration: string;
    linkToEpisode?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
  share: {
    label: string;
    platform: 'appleMusic' | 'spotify' | 'youTube' | 'amazon' | 'deezer';
    link: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Book {
  id: string;
  name: string;
  description: string;
  bookImage: string | Media;
  learnMoreLink?: {
    label?: string;
    url?: string;
    newTab?: boolean;
  };
  linkToBuy?: {
    label?: string;
    url?: string;
    newTab?: boolean;
  };
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Homepage {
  id: string;
  hero: {
    heading: string;
    subHeading: string;
    heroText?: string;
    backgroundImage: {
      baseImage: string | Media;
      tabletImage?: string | Media;
      mobileImage?: string | Media;
    };
  };
  intro: {
    heading: string;
    excerpt: string;
    readMoreLink?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
    image: string | Media;
  };
  about: {
    heading: string;
    subHeading: string;
    bioSlide?: {
      title: string;
      description: string;
      image?: string | Media;
      id?: string;
    }[];
  };
  quoteBlock: {
    quote: {
      quoteText: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
    };
  };
  gallery: {
    images?: {
      label: string;
      image: string | Media;
      id?: string;
    }[];
  };
  workSummary: {
    heading: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Aboutpage {
  id: string;
  hero: {
    heading: string;
    subHeading: string;
    text?: string;
    heroImage: string | Media;
  };
  intro: {
    heading: string;
    excerpt: string;
    readMoreLink?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
    image: string | Media;
  };
  bio: {
    bioSections?: {
      title: string;
      description: string;
      images?: {
        image: string | Media;
        size?: 'default' | 'full';
        id?: string;
      }[];
      id?: string;
    }[];
  };
  about: {
    heading: string;
    subHeading: string;
    bioSlide?: {
      title: string;
      description: string;
      image?: string | Media;
      id?: string;
    }[];
  };
  quoteBlock1: {
    quote: {
      quoteText: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
    };
  };
  quoteBlock2: {
    quote: {
      quoteText: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
    };
  };
  podcastSpotlight: {
    podcastSpotlight: string | Podcast;
  };
  gallery: {
    images?: {
      image: string | Media;
      id?: string;
    }[];
  };
  workSummary: {
    heading: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Podcastspage {
  id: string;
  hero: {
    heroImage: string | Media;
    showcasePodcast: string | Podcast;
  };
  workSummary: {
    heading: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Mediapage {
  id: string;
  header: {
    heading: string;
  };
  press: {
    pressReleases?: {
      title: string;
      date: string;
      link?: {
        label?: string;
        url?: string;
        newTab?: boolean;
      };
      id?: string;
    }[];
  };
  pressMaterial: {
    pressMaterials?: {
      title: string;
      image: string | Media;
      id?: string;
    }[];
  };
  bios: {
    heading: string;
    bios?: {
      name: string;
      bio: string;
      image: string | Media;
      id?: string;
    }[];
  };
  socials: {
    heading: string;
    socialMediaLinks?: {
      label: string;
      icon: string | Media;
      link: string;
      id?: string;
    }[];
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Bookspage {
  id: string;
  hero: {
    heroImage: string | Media;
    bookShowcase: string | Book;
  };
  intro: {
    introText: string;
  };
  bookExcerpt: {
    excerpt: string;
    page: string;
    image: string | Media;
  };
  otherBooks: {
    heading: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Privacypolicypage {
  id: string;
  heading?: string;
  content?: {
    [k: string]: unknown;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Navigation {
  id: string;
  mainNavigation?: {
    label: string;
    url: string;
    newTab?: boolean;
    hide?: boolean;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  footerLogo: string;
  footerLinks?: {
    label: string;
    url: string;
    newTab?: boolean;
    hide?: boolean;
    id?: string;
  }[];
  contact?: {
    content: string;
    id?: string;
  }[];
  footerText: string;
  companyLinks?: {
    link: string;
    logo: string | Media;
    hide: boolean;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Favicon {
  id: string;
  favicon: string | Media;
  updatedAt?: string;
  createdAt?: string;
}
export interface Social {
  id: string;
  socialMediaLinks?: {
    link: string;
    logo: string | Media;
    hide: boolean;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Setting {
  id: string;
  siteTitle: string;
  siteDescription: string;
  siteBranding: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface WorkSummary {
  id: string;
  works?: {
    title: string;
    image: string | Media;
    excerpt: string;
    link?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
