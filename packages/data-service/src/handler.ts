import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ApolloServer, IFieldResolver } from "apollo-server";
import { config } from "dotenv";

config();

export const graphql: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  return {
    body: "Hello!",
    statusCode: 200,
  };
};
