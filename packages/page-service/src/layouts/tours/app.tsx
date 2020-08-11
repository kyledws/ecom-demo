import React from "react";

import { Serializable } from "local/@types/json";
import * as Env from "local/env";

type HomeProps = {
  readonly body: string;
  readonly state: Serializable;
  readonly styles: readonly React.ReactElement[];
  readonly title: string;
};

export const Home = (props: HomeProps): React.ReactElement => {
  const stringified = JSON.stringify(props.state).replace(/</g, "\\u003c");
  const stateScript = `window.__APP_STATE__=${stringified};`;
  return (
    <html lang="en">
      <head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        {props.styles}
      </head>

      <body>
        <div id="__tours" dangerouslySetInnerHTML={{ __html: props.body }}></div>
        <script dangerouslySetInnerHTML={{ __html: stateScript }} />
        <script src={`${Env.WEBPACK_BUNDLE_SERVER}/tours/app.js`}></script>
      </body>
    </html>
  );
};
