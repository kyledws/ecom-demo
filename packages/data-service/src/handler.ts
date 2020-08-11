import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { graphql as graphqlServer } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import StoryblokClient from "storyblok-js-client";

import { Memcache, ResolverContext, resolvers, typeDefs } from "local/apis";
import * as Env from "local/env";

const mergedSchema = makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  resolvers,
  typeDefs,
});

const sbClient = new StoryblokClient({
  accessToken: Env.STORYBLOK_PUBLIC_ACCESS_TOKEN,
});

const sbCache = Memcache.getMemcacheClient(Env.STORYBLOK_MEMCACHE_CONNECTION_STRING);

export const graphql: APIGatewayProxyHandlerV2 = async (event) => {
  const resolverContext: ResolverContext = { bypassCache: false, sbCache, sbClient };

  const body = JSON.parse(event.body ?? "");

  const data = await graphqlServer({
    contextValue: resolverContext,
    schema: mergedSchema,
    source: body.query,
    variableValues: body.variables,
  });

  return {
    body: JSON.stringify(data),
    statusCode: 200,
  };
};
