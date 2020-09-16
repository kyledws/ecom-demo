import { GraphQLClient } from "graphql-request";
import StoryblokClient from "storyblok-js-client";

import { Memcache } from "../repository";

export type ResolverContext = {
  bypassCache: boolean;
  contentClient: GraphQLClient;
  dataClient: GraphQLClient;
  sbCache: Memcache.Client;
  sbClient: StoryblokClient;
};
