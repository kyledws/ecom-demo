import { GraphQLClient } from "graphql-hooks";

export type AppProps = {
  gqlClient: GraphQLClient;
};

type AppState = AppProps;

export const useApp = (props: AppProps): AppState => {
  return {
    ...props,
  };
};
