import { Maybe } from "purify-ts";
import StoryblokClient, { Story, StoryblokComponent } from "storyblok-js-client";

import { tryMaybeAsync } from "@package/utilities";

import { WebpageContent as GqlContent } from "local/schema/webpage-content";
import * as Cached from "./storyblok-cache";
import * as Memcache from "./memcache";

export type SbContent<T = unknown> = Omit<GqlContent, "body"> & {
  body: StoryblokComponent<any> & T;
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
  if (!bypassCache && (!cache || cached?.isNothing()) && content.isJust()) {
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
  if (!bypassCache && (!cache || cached?.isNothing()) && content.isJust()) {
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
      return getContentFromStory(response);
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
      return getContentFromStory(response);
    },
    (e: unknown) => console.warn(`Failed to get story for id "${id}"`, e)
  );
};

export const getContentFromStory = <T>(story: Story): SbContent<T> => {
  const data = story.data.story;
  const content = {
    body: (data.content as unknown) as StoryblokComponent<any> & T,
    fullSlug: data.full_slug,
    id: data.id,
    type: data.content.component,
  };
  return content;
};
