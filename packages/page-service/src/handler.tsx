import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import fetch from "cross-fetch";

import { getPage } from "local/utils/page";
import * as Env from "local/env";

const HTTP_OKAY = 200;
const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_NOT_FOUND = 404;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ fetch, uri: Env.DATA_SERVICE }),
  ssrMode: true,
});

export const page: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  const { page } = { page: {} };
  if (page) {
    const context = JSON.parse(JSON.stringify(""));
    const body = await getPage({
      app: "tours",
      apolloClient,
      context,
      title: "Title",
      type: "home",
    });
    if (body.isJust()) {
      return {
        body: body.extract(),
        headers: {
          "content-type": "text/html",
        },
        statusCode: HTTP_OKAY,
      };
    } else {
      return {
        statusCode: HTTP_NOT_FOUND,
      };
    }
  } else {
    return {
      statusCode: HTTP_NOT_FOUND,
    };
  }
};
