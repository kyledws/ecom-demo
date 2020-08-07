import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import { renderToStringWithData } from "@apollo/client/react/ssr";
import { Maybe } from "purify-ts";
import React from "react";
import ReactSSR from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import { Components as Storefront } from "@package/storefront";
import { equals, match, tryMaybeAsync } from "@package/utilities";

import { Serializable } from "local/@types/json";
import { Home } from "local/layouts/storefront";

type GetPageArgs<T = unknown> = {
  readonly app: string;
  readonly context: T;
  readonly title: string;
  readonly type: string;
};

const DATA_SERVICE_ENDPOINT = "http://localhost:4000";

export function getPage<T>(args: GetPageArgs<T>): Promise<Maybe<string>> {
  const { app, context, title, type } = args;
  return tryMaybeAsync(
    async () => {
      const AppMaybe = match(app, [[equals("storefront"), () => Storefront.App]]);
      if (AppMaybe.isNothing()) {
        return null;
      }
      const App = AppMaybe.unsafeCoerce();

      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({ fetch, uri: DATA_SERVICE_ENDPOINT }),
        ssrMode: true,
      });

      const sheet = new ServerStyleSheet();
      const styledApp = sheet.collectStyles(<App apolloClient={client} />);
      const body = await renderToStringWithData(styledApp);
      const styles = sheet.getStyleElement();
      sheet.seal();

      const appState = {
        ...context,
        apolloData: client.extract(),
      } as Serializable;

      const LayoutMaybe = match(type, [[equals("home"), () => Home]]);
      if (LayoutMaybe.isNothing()) {
        return null;
      }
      const Layout = LayoutMaybe.unsafeCoerce();

      const html = ReactSSR.renderToStaticMarkup(
        <Layout body={body} state={appState} styles={styles} title={title} />
      );
      return `<!doctyle html>${html}`;
    },
    (e) => console.log("getPage", e)
  );
}
