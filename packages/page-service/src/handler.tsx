import { APIGatewayProxyHandlerV2 } from "aws-lambda";

import { request } from "graphql-request";

import { getPage } from "local/utils/page";

const HTTP_OKAY = 200;
const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_NOT_FOUND = 404;
const PORT = 80;

export const page: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
  const url = /\/(?<path>\w*)/.exec(event.rawPath);
  const variables = { fullSlug: url?.groups?.path };
  const { page } = await request("", query, variables);
  if (page) {
    const context = JSON.parse(JSON.stringify(ctx));
    const body = await getPage({
      ...page,
      app: "tours",
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
