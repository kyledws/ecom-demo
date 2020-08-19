import StoryblokClient from "storyblok-js-client";
import { Memcache } from "../repository";

export type ResolverContext = {
  bypassCache: boolean;
  sbCache: Memcache.Client;
  sbClient: StoryblokClient;
};
