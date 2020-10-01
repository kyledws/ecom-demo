import { GraphQLClient } from "graphql-hooks";
import { Option } from "monads";
import { h } from "preact";
import render from "preact-render-to-string";

import { Components as Music } from "@package/music";
import { equals, match, tryOptionAsync } from "@package/utilities";

import { getInitialState } from "../ssr";
import { Home } from "local/layouts/music";
import { Serializable } from "local/@types/json";

type GetPageArgs<Context = unknown> = {
  app: string;
  gqlClient: GraphQLClient;
  context: Context;
  title: string;
  type: string;
};

export function getPage<Context>(args: GetPageArgs<Context>): Promise<Option<string>> {
  const { app, context, gqlClient, title, type } = args;
  return tryOptionAsync(
    async () => {
      const AppComponentMaybe = match(app, [[equals("music"), () => Music.App]]);
      if (AppComponentMaybe.isNone()) {
        return null;
      }
      const AppComponent = AppComponentMaybe.unwrap();
      const App = <AppComponent gqlClient={gqlClient} />;

      const gqlCache = await getInitialState({ App, client: gqlClient, render });
      const body = render(App);

      const appState = {
        ...context,
        gqlCache,
      } as Serializable;

      const LayoutMaybe = match(type, [[equals("home"), () => Home]]);

      if (LayoutMaybe.isNone()) {
        return null;
      }
      const Layout = LayoutMaybe.unwrap();

      const html = render(<Layout body={body} state={appState} title={title} />);
      return `<!doctyle html>${html}`;
    },
    (e: unknown) => console.log("getPage", e)
  );
}
