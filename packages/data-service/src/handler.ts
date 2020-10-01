import "reflect-metadata";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { graphql as graphqlServer } from "graphql";
import { GraphQLClient } from "graphql-request";
import StoryblokClient from "storyblok-js-client";

import { Memcache } from "./repository";
import { ResolverContext, schema } from "local/schema";
import * as Env from "local/env";

const contentClient = new GraphQLClient("");

const dataClient = new GraphQLClient("");

const sbClient = new StoryblokClient({
  accessToken: Env.STORYBLOK_PUBLIC_ACCESS_TOKEN,
});

const sbCache = Memcache.getClient(Env.STORYBLOK_MEMCACHE_CONNECTION_STRING);

export const graphql: APIGatewayProxyHandlerV2 = async (event) => {
  const resolverContext: ResolverContext = {
    bypassCache: false,
    contentClient,
    dataClient,
    sbCache,
    sbClient,
  };

  const body = JSON.parse(event.body ?? "");

  const data = await graphqlServer({
    contextValue: resolverContext,
    schema: await schema,
    source: body.query,
    variableValues: body.variables,
  });

  return {
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    statusCode: 200,
  };
};
