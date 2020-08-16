import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import fetch from "cross-fetch";

import { getPage } from "local/utils/page";
import * as Env from "local/env";

const HTTP_OKAY = 200;
const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_NOT_FOUND = 404;

const query = gql`
  query($site: Site, $fullSlug: String) {
    page(site: $site, fullSlug: $fullSlug) {
      seoMetadata {
        pageTitle
      }
    }
  }
`;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ fetch, uri: Env.DATA_SERVICE }),
  ssrMode: true,
});

export const page: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  const url = /\/(?<path>\w*)/.exec(event.rawPath);
  const variables = { fullSlug: "full/slug", site: "TOURS" };
  const result = await apolloClient.query({
    query,
    variables,
  });
  const { page } = result.data;
  if (page) {
    const context = JSON.parse(JSON.stringify(""));
    const body = await getPage({
      ...page,
      app: "tours",
      apolloClient,
      context,
      title: "Title",
    });
    if (body.isJust()) {
      return {
        body: body.extract(),
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
