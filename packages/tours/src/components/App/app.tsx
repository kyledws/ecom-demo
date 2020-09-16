import { ApolloClient, ApolloProvider } from "@apollo/client";
import React from "react";

import { Departures } from "local/components";

type AppProps = {
  apolloClient: ApolloClient<unknown>;
};

export const App = (props: AppProps): React.ReactElement => {
  return (
    <div data-reactroot="">
      <ApolloProvider client={props.apolloClient}>
        <Departures />
      </ApolloProvider>
    </div>
  );
};
