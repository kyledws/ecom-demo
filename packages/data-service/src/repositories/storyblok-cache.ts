import { Maybe } from "purify-ts";

import { tryMaybeAsync } from "@package/utilities";

import { Memcache } from "local/apis";
import { SbContent } from "./storyblok";

export const cacheContentByFullSlug = async <T>(
  fullSlug: string,
  content: SbContent<T>,
  client: Memcache.Client
): Promise<Maybe<boolean>> => {
  const res = await client.set(
    `storyblok_full_slug_${fullSlug}`,
    JSON.stringify(content)
  );
  return res;
};

export const cacheContentById = async <T>(
  id: number,
  content: SbContent<T>,
  client: Memcache.Client
): Promise<Maybe<boolean>> => {
  const res = await client.set(`storyblok_id_${id}`, JSON.stringify(content));
  return res;
};

export const getContentByFullSlug = <T>(
  fullSlug: string,
  client: Memcache.Client
): Promise<Maybe<SbContent<T>>> => {
  return tryMaybeAsync(
    async () => {
      const res = await client.get(`storyblok_full_slug_${fullSlug}`);
      return res.isJust() ? (JSON.parse(res.extract()) as SbContent<T>) : null;
    },
    (e) => console.warn(`Failed to parse content for storyblok_full_slug_${fullSlug}`, e)
  );
};

export const getContentById = async <T>(
  id: number,
  client: Memcache.Client
): Promise<Maybe<SbContent<T>>> => {
  return tryMaybeAsync(
    async () => {
      const res = await client.get(`storyblok_id_${id}`);
      return res.isJust() ? (JSON.parse(res.extract()) as SbContent<T>) : null;
    },
    (e) => console.warn(`Failed to parse content for storyblok_id_${id}`, e)
  );
};
