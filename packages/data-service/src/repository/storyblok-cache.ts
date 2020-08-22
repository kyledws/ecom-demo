import { Either, tryEitherAsync } from "@package/utilities";

import { SbContent } from "./storyblok";
import { trace } from "local/utils/debug";
import * as Memcache from "./memcache";

export const cacheContentByFullSlug = (
  fullSlug: string,
  content: SbContent,
  client: Memcache.Client
): Promise<Either<boolean>> => {
  return client.set(getKeyForFullSlug(fullSlug), JSON.stringify(content));
};

export const cacheContentById = (
  id: number,
  content: SbContent,
  client: Memcache.Client
): Promise<Either<boolean>> => {
  return client.set(getKeyForId(id), JSON.stringify(content));
};

export const getContentByFullSlug = (
  fullSlug: string,
  client: Memcache.Client
): Promise<Either<SbContent>> => {
  const key = getKeyForFullSlug(fullSlug);
  return tryEitherAsync(
    async () => {
      const res = await client.get(key);
      return res.map<SbContent | null>(JSON.parse).orDefault(null);
    },
    (e: unknown) =>
      trace({
        innerError: e,
        message: `Failed to parse content for ${key}`,
      })
  );
};

export const getContentById = async (
  id: number,
  client: Memcache.Client
): Promise<Either<SbContent>> => {
  const key = getKeyForId(id);
  return tryEitherAsync(
    async () => {
      const res = await client.get(key);
      return res.map<SbContent | null>(JSON.parse).orDefault(null);
    },
    (e: unknown) =>
      trace({
        innerError: e,
        message: `Failed to parse content for ${key}`,
      })
  );
};

export const getKeyForFullSlug = (fullSlug: string): string =>
  `storyblok_full_slug_${fullSlug}`;

export const getKeyForId = (id: number): string => `storyblok_id_${id}`;
