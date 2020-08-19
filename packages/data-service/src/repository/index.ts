import type { SbContent } from "./storyblok";
import * as StoryblokRepo from "./storyblok";
import * as Memcache from "./memcache";

export const Storyblok = {
  getContentByFullSlug: StoryblokRepo.getCachedContentByFullSlug,
  getContentById: StoryblokRepo.getCachedContentById,
};

export type { SbContent };

export { Memcache };
