import "preact/debug";

import { GraphQLClient } from "graphql-hooks";
import gqlMemCache from "graphql-hooks-memcache";
import { h, hydrate } from "preact";

import { App } from "local/components";

declare const window: Window & {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  __APP_STATE__: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  Buffer: any;
};

const container = document.querySelector("#__music") as Element;
const appData = document.querySelector("#__app-data") as HTMLScriptElement;

const gqlClient = new GraphQLClient({
  cache: gqlMemCache({
    initialState: JSON.parse(appData.innerHTML),
  }),
  url: "http://127.0.0.1:1000/",
});

/* graphql-hooks-memcache tries to call Buffer outside of node */
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.Buffer = function () {};

hydrate(<App gqlClient={gqlClient} />, container);
