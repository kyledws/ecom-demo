import { config } from "dotenv";

config();

export const STORYBLOK_PUBLIC_ACCESS_TOKEN =
  process.env.STORYBLOK_PUBLIC_ACCESS_TOKEN ?? "";

export const STORYBLOK_PRIVATE_ACCESS_TOKEN =
  process.env.STORYBLOK_PRIVATE_ACCESS_TOKEN ?? "";