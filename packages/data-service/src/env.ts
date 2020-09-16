import { config } from "dotenv";

config();

export const DEBUG_TRACING = process.env.DEBUG_TRACING === "true";

export const SAMPLE_DATA_ENDPOINT = process.env.SAMPLE_DATA_ENDPOINT ?? "";

export const SAMPLE_CONTENT_ENDPOINT = process.env.SAMPLE_CONTENT_ENDPOINT ?? "";

export const STORYBLOK_MEMCACHE_CONNECTION_STRING =
  process.env.STORYBLOK_MEMCACHE_CONNECTION_STRING ?? "";

export const STORYBLOK_PUBLIC_ACCESS_TOKEN =
  process.env.STORYBLOK_PUBLIC_ACCESS_TOKEN ?? "";

export const STORYBLOK_PRIVATE_ACCESS_TOKEN =
  process.env.STORYBLOK_PRIVATE_ACCESS_TOKEN ?? "";
