import { Client as MemJsClient } from "memjs";

import type * as MemcacheTypes from "./memcache";
import type * as StoryblokTypes from "./storyblok";
import * as MemcacheImpl from "./memcache";
import * as StoryblokImpl from "./storyblok";

export namespace Storyblok {
  export type SbContent = StoryblokTypes.SbContent;
  export const getContentByFullSlug = StoryblokImpl.getCachedContentByFullSlug;
  export const getContentById = StoryblokImpl.getCachedContentById;
}

export namespace Memcache {
  export type Client = MemcacheTypes.Client;
  export function getClient(url: string) {
    return MemcacheImpl.getClient(url, MemJsClient.create);
  }
}
