import { GraphQLClient } from "graphql-hooks";
import gqlMemCache from "graphql-hooks-memcache";
import { h, render } from "preact";

import { App } from "local/components";

declare const window: Window & {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  __APP_STATE__: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  Buffer: any;
};

const container: Element = document.querySelector("#__tours") as Element;

const gqlClient = new GraphQLClient({
  cache: gqlMemCache({
    initialState: window.__APP_STATE__.gqlCache,
  }),
  url: "http://127.0.0.1:1000/",
});

/* graphql-hooks-memcache tries to call Buffer outside of node */
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.Buffer = function () {};

render(<App gqlClient={gqlClient} />, container);
