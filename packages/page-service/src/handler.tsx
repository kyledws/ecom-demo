import { request } from "graphql-request";

import { getPage } from "local/utils/page";

const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_NOT_FOUND = 404;
const PORT = 80;

// const url = /\/(?<path>\w*)/.exec(ctx.URL.pathname);
// const variables = { fullSlug: url?.groups?.path };
// const { page } = await request<Response>("http://localhost:4000", query, variables);
// if (page) {
//   const context = JSON.parse(JSON.stringify(ctx));
//   const body = await getPage({
//     ...page,
//     app: "storefront",
//     context,
//     title: "Title",
//   });
//   if (body.isJust()) {
//     ctx.res.setHeader("content-type", "text/html; charset=utf-8");
//     // eslint-disable-next-line functional/immutable-data
//     ctx.body = body.extract();
//     return;
//   }
// }