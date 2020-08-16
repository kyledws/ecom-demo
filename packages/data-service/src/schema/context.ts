import StoryblokClient from "storyblok-js-client";
import { Memcache } from "./caching";

export type ResolverContext = {
  bypassCache: boolean;
  sbCache: Memcache.Client;
  sbClient: StoryblokClient;
};
