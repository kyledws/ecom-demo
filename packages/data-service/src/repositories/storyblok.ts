import { Maybe } from "purify-ts";
import StoryblokClient from "storyblok-js-client";

import { tryMaybeAsync } from "@package/utilities";

import { WebpageContent as GqlContent } from "local/apis/webpage-content";
import { Memcache } from "local/apis";
import * as Cached from "./storyblok-cache";

export type SbContent<T = unknown> = Omit<GqlContent, "body"> & {
  body: T;
};

export const getCachedContentByFullSlug = async <T>(
  fullSlug: string,
  client: StoryblokClient,
  cache: Memcache.Client,
  bypassCache?: boolean
): Promise<Maybe<SbContent<T>>> => {
  const cached = bypassCache
    ? null
    : await Cached.getContentByFullSlug<T>(fullSlug, cache);
  const content = cached?.isJust()
    ? cached
    : await getContentByFullSlug<T>(fullSlug, client);
  if (!bypassCache && content.isJust()) {
    await Cached.cacheContentByFullSlug(fullSlug, content.extract(), cache);
  }
  return content;
};

export const getCachedContentById = async <T>(
  id: number,
  client: StoryblokClient,
  cache: Memcache.Client,
  bypassCache?: boolean
): Promise<Maybe<SbContent<T>>> => {
  const cached = bypassCache ? null : await Cached.getContentById<T>(id, cache);
  const content = cached?.isJust() ? cached : await getContentById<T>(id, client);
  if (!bypassCache && content.isJust()) {
    await Cached.cacheContentById(id, content.extract(), cache);
  }
  return content;
};

export const getContentByFullSlug = <T>(
  fullSlug: string,
  client: StoryblokClient
): Promise<Maybe<SbContent<T>>> => {
  return tryMaybeAsync(
    async () => {
      const response = await client.getStory(fullSlug);
      const story = response.data.story;
      const content = {
        body: (story.content as unknown) as T,
        fullSlug: story.full_slug,
        id: story.id,
        type: story.content.component,
      };
      return content;
    },
    (e: unknown) => console.warn(`Failed to get story for fullSlug "${fullSlug}"`, e)
  );
};

export const getContentById = <T>(
  id: number,
  client: StoryblokClient
): Promise<Maybe<SbContent<T>>> => {
  return tryMaybeAsync(
    async () => {
      const response = await client.getStory(id.toString());
      const story = response.data.story;
      const content = {
        body: (story.content as unknown) as T,
        fullSlug: story.full_slug,
        id: story.id,
        type: story.content.component,
      };
      return content;
    },
    (e: unknown) => console.warn(`Failed to get story for id "${id}"`, e)
  );
};
