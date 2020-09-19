import { ClientContext, GraphQLClient } from "graphql-hooks";
import React from "react";

import { Departures } from "../Departures";

type AppProps = {
  gqlClient: GraphQLClient;
};

export const App = (props: AppProps): React.ReactElement => {
  return (
    <div>
      <ClientContext.Provider value={props.gqlClient}>
        <Departures />
      </ClientContext.Provider>
    </div>
  );
};
