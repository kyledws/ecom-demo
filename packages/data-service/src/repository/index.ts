import { Client as MemJsClient } from "memjs";

import type * as MemcacheTypes from "./memcache";
import type * as StoryblokTypes from "./storyblok";
import * as MemcacheImpl from "./memcache";
import * as SbCache from "./storyblok-cache";
import * as StoryblokImpl from "./storyblok";

export namespace Storyblok {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type SbContent<C extends string = any, T = unknown> = StoryblokTypes.SbContent<
    C,
    T
  >;
  export const cache = SbCache;
  export const getContentByFullSlug = StoryblokImpl.getContentByFullSlug;
  export const getContentById = StoryblokImpl.getContentById;
}

export namespace Memcache {
  export type Client = MemcacheTypes.Client;
  export function getClient(url: string): MemcacheTypes.Client {
    return MemcacheImpl.getClient(url, MemJsClient.create);
  }
}
