import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql as graphqlServer } from "graphql";

import { ResolverContext, resolvers, typeDefs } from "local/apis";

const mergedSchema = makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  resolvers,
  typeDefs,
});

export const graphql: APIGatewayProxyHandlerV2 = async (event) => {
  const resolverContext: ResolverContext = {};

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
