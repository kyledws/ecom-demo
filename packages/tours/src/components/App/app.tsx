import { ClientContext, GraphQLClient } from "graphql-hooks";
import { h } from "preact";

import { Departures } from "../Departures";

type AppProps = {
  gqlClient: GraphQLClient;
};

export const App = (props: AppProps): h.JSX.Element => {
  return (
    <div>
      <ClientContext.Provider value={props.gqlClient}>
        <Departures />
      </ClientContext.Provider>
    </div>
  );
};
