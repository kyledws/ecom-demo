import { h } from "preact";
import * as Env from "local/env";

import { HomeProps, useHomeState } from "./home.state";

export const Home = (props: HomeProps): h.JSX.Element => {
  const state = useHomeState(props);

  return (
    <html lang="en">
      <head>
        <title>{state.title}</title>
        <meta charSet="utf-8" />
        <link href={`${Env.WEBPACK_BUNDLE_SERVER}/styles.css`} rel="stylesheet" />
      </head>

      <body>
        <div id="__music" dangerouslySetInnerHTML={{ __html: state.body }}></div>
        <script
          id="__app-data"
          dangerouslySetInnerHTML={{ __html: state.appState }}
          type="application/json"
        />
        <script src={`${Env.WEBPACK_BUNDLE_SERVER}/home.js`}></script>
      </body>
    </html>
  );
};
