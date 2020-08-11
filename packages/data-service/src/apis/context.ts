import StoryblokClient from "storyblok-js-client";
import { Memcache } from "./caching";

export type ResolverContext = {
  readonly bypassCache: boolean;
  readonly sbCache: Memcache.Client;
  readonly sbClient: StoryblokClient;
};
