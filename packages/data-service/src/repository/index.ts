import * as StoryblokRepo from "./storyblok";

export const Storyblok = {
  getContentByFullSlug: StoryblokRepo.getCachedContentByFullSlug,
  getContentById: StoryblokRepo.getCachedContentById,
};
