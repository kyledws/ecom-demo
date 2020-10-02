import { ClientContext } from "graphql-hooks";
import { h } from "preact";
import { RecoilRoot } from "recoil";

import { AppProps, useApp } from "./app.hook";
import { Counter } from "../Counter";

export const App = (props: AppProps): h.JSX.Element => {
  const state = useApp(props);

  return (
    <ClientContext.Provider value={state.gqlClient}>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </ClientContext.Provider>
  );
};
