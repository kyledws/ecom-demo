import { ClientContext, GraphQLClient } from "graphql-hooks";
import { h } from "preact";

type AppProps = {
  gqlClient: GraphQLClient;
};

export const App = (props: AppProps): h.JSX.Element => {
  return (
    <div>
      <ClientContext.Provider value={props.gqlClient}>Hello</ClientContext.Provider>
    </div>
  );
};
