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
    'podcasts-list': Podcast;
    books: Book;
    users: User;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    homepage: Homepage;
    aboutpage: Aboutpage;
    mediapage: Mediapage;
    privacypolicypage: Privacypolicypage;
    navigation: Navigation;
    footer: Footer;
    favicon: Favicon;
    socials: Social;
    settings: Settings;
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
  slug?: string;
  info: {
    summary: string;
    image: string | Media;
    presentedBy?: string;
    moderator?: string;
    linkToListen?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
  };
  hero: {
    heroImage: string | Media;
  };
  episodes: {
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
  };
  share: {
    share: {
      label: string;
      platform: 'appleMusic' | 'spotify' | 'youTube' | 'amazon' | 'deezer';
      logo: {
        altText: string;
        imagekit: {
          url: string;
        }
      };
      link: string;
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
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Book {
  id: string;
  name: string;
  description: {
    [k: string]: unknown;
  }[];
  slug?: string;
  info: {
    bookImage: string | Media;
    linkToBuy?: {
      label?: string;
      url?: string;
      newTab?: boolean;
    };
  };
  hero: {
    heroImage: string | Media;
  };
  intro: {
    introText: {
      [k: string]: unknown;
    }[];
  };
  excerpt: {
    excerpt: {
      [k: string]: unknown;
    }[];
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
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
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
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface HomepageGalleryMedia {
  title: string;
  image: string | Media;
  id?: string;
  link?: {
    url?: string;
    newTab?: boolean;
  };
}
export interface Homepage {
  id: string;
  hero: {
    heading: string;
    subHeading: string;
    heroText?: string;
    backgroundImage: {
      baseImage: string | Media;
      baseImageEffectMask: string | Media;
      tabletImage?: string | Media;
      tabletImageEffectMask?: string | Media;
      mobileImage?: string | Media;
      mobileImageEffectMask?: string | Media;
    };
  };
  intro: {
    heading: string;
    excerpt: {
      [k: string]: unknown;
    }[];
    image: string | Media;
  };
  about: {
    heading: string;
    subHeading: string;
    bioSlide?: {
      title: string;
      description: {
        [k: string]: unknown;
      }[];
      image?: string | Media;
      id?: string;
    }[];
  };
  quoteBlock: {
    quotes: {
      quote: string;
      quotee: string;
      color: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
    }[];
  };
  gallery: {
    images?: HomepageGalleryMedia[];
  };
  workSummary: {
    heading: string;
  };
  siteBranding: {
    image?: string | Media;
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
    heroImage: {
      altText: string;
      imagekit: {
        url: string;
      }
    };
    heroImageMobile: {
      altText: string;
      imagekit: {
        url: string;
      }
    };
  };
  intro: {
    heading: string;
    excerpt: {
      [k: string]: unknown;
    }[];
    image: string | Media;
  };
  bio: {
    bioSections?: {
      title: string;
      description: {
        [k: string]: unknown;
      }[];
      excerpt: string;
      images?: {
        image: {
          altText: string;
          imagekit: {
            url: string;
          }
        };
        size?: 'default' | 'full';
        id?: string;
      }[];
      id?: string;
    }[];
  };
  imageBlock: {
    image: {
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
      hide: boolean;
    };
  };
  about: {
    heading: string;
    subHeading: string;
    bioSlide?: {
      title: string;
      description: {
        [k: string]: unknown;
      }[];
      image?: string | Media;
      id?: string;
    }[];
  };
  quoteBlock1: {
    quote: {
      quoteText: string;
      quotee: string;
      color: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
      hide: boolean;
    };
  };
  quoteBlock2: {
    quote: {
      quoteText: string;
      quotee: string;
      color: string;
      image: string | Media;
      size?: 'extraSmall' | 'small' | 'medium' | 'large';
      hide: boolean;
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
    hide: boolean;
  };
  workSummary: {
    heading: string;
  };
  siteBranding: {
    image?: string | Media;
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
      downloadLink?: {
        label?: string;
        url?: string;
        newTab?: boolean;
      };
      id?: string;
    }[];
  };
  bios: {
    heading: string;
    bios?: {
      name: string;
      bio: {
        [k: string]: unknown;
      }[];
      image: string | Media;
      hide: boolean;
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
  siteBranding: {
    image?: string | Media;
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
    type: 'single' | 'dropdown';
    newTab: boolean;
    hide: boolean;
    url: string;
    dropdown?: {
      label: string;
      url: string;
      newTab?: boolean;
      hide?: boolean;
      id?: string;
    }[];
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  footerLogo: string;
  joinTheMovement: {
    heading: string;
    text: {
      [k: string]: unknown;
    }[];
    form: {
      form: string | Form;
      id?: string;
      blockName?: string;
      blockType: 'form-block';
    }[];
  };
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
  updatedAt?: string;
  createdAt?: string;
}
export interface Favicon {
  id: string;
  favicon?: string | Media;
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
export interface Settings {
  id: string;
  siteTitle: string;
  siteDescription: string;
  siteBranding?: string | Media;
  alternativeBranding?: string | Media;
  siteBackgroundColor?: string | undefined;
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
