import { Maybe } from "purify-ts";

import { tryMaybeAsync } from "@package/utilities";

import { SbContent } from "./storyblok";
import * as Memcache from "./memcache";

export const cacheContentByFullSlug = <T>(
  fullSlug: string,
  content: SbContent<T>,
  client: Memcache.Client
): Promise<Maybe<boolean>> => {
  return client.set(getKeyForFullSlug(fullSlug), JSON.stringify(content));
};

export const cacheContentById = <T>(
  id: number,
  content: SbContent<T>,
  client: Memcache.Client
): Promise<Maybe<boolean>> => {
  return client.set(getKeyForId(id), JSON.stringify(content));
};

export const getContentByFullSlug = <T>(
  fullSlug: string,
  client: Memcache.Client
): Promise<Maybe<SbContent<T>>> => {
  const key = getKeyForFullSlug(fullSlug);
  return tryMaybeAsync(
    async () => {
      const res = await client.get(key);
      return res.mapOrDefault<SbContent<T> | null>(JSON.parse, null);
    },
    (e: unknown) => console.warn(`Failed to parse content for ${key}`, e)
  );
};

export const getContentById = async <T>(
  id: number,
  client: Memcache.Client
): Promise<Maybe<SbContent<T>>> => {
  const key = getKeyForId(id);
  return tryMaybeAsync(
    async () => {
      const res = await client.get(key);
      return res.mapOrDefault<SbContent<T> | null>(JSON.parse, null);
    },
    (e: unknown) => console.warn(`Failed to parse content for ${key}`, e)
  );
};

export const getKeyForFullSlug = (fullSlug: string): string =>
  `storyblok_full_slug_${fullSlug}`;

export const getKeyForId = (id: number): string => `storyblok_id_${id}`;
