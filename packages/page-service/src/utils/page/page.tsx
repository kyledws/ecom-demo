import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { renderToStringWithData } from "@apollo/client/react/ssr";
import { Maybe } from "purify-ts";
import React from "react";
import ReactSSR from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import { Components as Tours } from "@package/tours";
import { equals, match, tryMaybeAsync } from "@package/utilities";

import { Home } from "local/layouts/tours";
import { Serializable } from "local/@types/json";

type GetPageArgs<Context = unknown> = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  app: string;
  context: Context;
  title: string;
  type: string;
};

export function getPage<Context>(args: GetPageArgs<Context>): Promise<Maybe<string>> {
  const { apolloClient, app, context, title, type } = args;
  return tryMaybeAsync(
    async () => {
      const AppMaybe = match(app, [[equals("tours"), () => Tours.App]]);
      if (AppMaybe.isNothing()) {
        return null;
      }
      const App = AppMaybe.unsafeCoerce();

      const sheet = new ServerStyleSheet();
      const styledApp = sheet.collectStyles(<App apolloClient={apolloClient} />);
      const body = await renderToStringWithData(styledApp);
      const styles = sheet.getStyleElement();
      sheet.seal();

      const appState = {
        ...context,
        apolloData: apolloClient.extract(),
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
    (e: unknown) => console.log("getPage", e)
  );
}
