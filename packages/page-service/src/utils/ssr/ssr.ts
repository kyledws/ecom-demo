import { h } from "preact";

type Args = {
  App: h.JSX.Element;
  client: any;
  render: (target: h.JSX.Element) => string;
};

export async function getInitialState(opts: Args): Promise<any> {
  const { App, client, render } = opts;

  if (!client.cache) {
    throw new Error(
      "A cache implementation must be provided for SSR, please pass one to `GraphQLClient` via `options`."
    );
  }

  // ensure ssrMode is set:
  client.ssrMode = true;
  render(App);

  if (client.ssrPromises.length) {
    await Promise.all(client.ssrPromises);
    // clear promises
    client.ssrPromises = [];
    // recurse there may be dependant queries
    return getInitialState(opts);
  } else {
    return client.cache.getInitialState();
  }
}
