import { h } from "preact";
import { Serializable } from "local/@types/json";
import * as Env from "local/env";

type HomeProps = {
  body: string;
  state: Serializable;
  title: string;
};

export const Home = (props: HomeProps): h.JSX.Element => {
  const stringified = JSON.stringify(props.state).replace(/</g, "\\u003c");
  const stateScript = `window.__APP_STATE__=${stringified};`;
  return (
    <html lang="en">
      <head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <link href={`${Env.WEBPACK_BUNDLE_SERVER}/styles.css`} rel="stylesheet" />
      </head>

      <body>
        <div id="__tours" dangerouslySetInnerHTML={{ __html: props.body }}></div>
        <script dangerouslySetInnerHTML={{ __html: stateScript }} />
        <script src={`${Env.WEBPACK_BUNDLE_SERVER}/home.js`}></script>
      </body>
    </html>
  );
};
