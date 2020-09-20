import { GraphQLClient } from "graphql-hooks";
import { h } from "preact";
import { Maybe } from "purify-ts/es";
import render from "preact-render-to-string";

import { Components as Tours } from "@package/tours";
import { equals, match, tryMaybeAsync } from "@package/utilities";

import { getInitialState } from "../ssr";
import { Home } from "local/layouts/tours";
import { Serializable } from "local/@types/json";

type GetPageArgs<Context = unknown> = {
  app: string;
  gqlClient: GraphQLClient;
  context: Context;
  title: string;
  type: string;
};

export function getPage<Context>(args: GetPageArgs<Context>): Promise<Maybe<string>> {
  const { app, context, gqlClient, title, type } = args;
  return tryMaybeAsync(
    async () => {
      const AppComponentMaybe = match(app, [[equals("tours"), () => Tours.App]]);
      if (AppComponentMaybe.isNothing()) {
        return null;
      }
      const AppComponent = AppComponentMaybe.unsafeCoerce();
      const App = <AppComponent gqlClient={gqlClient} />;

      const gqlCache = await getInitialState({ App, client: gqlClient, render });
      const body = render(App);

      const appState = {
        ...context,
        gqlCache,
      } as Serializable;

      const LayoutMaybe = match(type, [[equals("home"), () => Home]]);

      if (LayoutMaybe.isNothing()) {
        return null;
      }
      const Layout = LayoutMaybe.unsafeCoerce();

      const html = render(<Layout body={body} state={appState} title={title} />);
      return `<!doctyle html>${html}`;
    },
    (e: unknown) => console.log("getPage", e)
  );
}
