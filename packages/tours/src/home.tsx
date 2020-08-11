import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "local/components";

declare const window: Window & {
  // eslint-disable-next-line functional/prefer-readonly-type, @typescript-eslint/no-explicit-any
  __APP_STATE__: any;
};

const container = document.querySelector("#__tours");

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APP_STATE__.apolloData),
  uri: "http://localhost:4000",
});

ReactDOM.hydrate(<App apolloClient={client} />, container);
