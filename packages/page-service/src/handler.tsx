import AWS from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { GraphQLClient } from "graphql-hooks";
import gqlMemCache from "graphql-hooks-memcache";
import fetch from "cross-fetch";

import { getPage } from "local/utils/page";
import * as Env from "local/env";

const HTTP_OKAY = 200;
const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_NOT_FOUND = 404;

const gqlClient = new GraphQLClient({
  cache: gqlMemCache(),
  fetch,
  ssrMode: true,
  url: "http://host.docker.internal:1000",
});

export const page: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  const { page } = { page: {} };
  if (page) {
    const context = JSON.parse(JSON.stringify(""));
    const body = await getPage({
      app: "tours",
      gqlClient,
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
