import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ApolloServer, IFieldResolver } from "apollo-server";

export const graphql: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  return {
    body: "Hello!",
    statusCode: 200,
  };
};
