import { mergeResolvers } from "@graphql-tools/merge";

import { ResolverContext } from "./context";

import { resolvers as baseResolver } from "./base";
import { resolvers as pagesResolver } from "./pages";
import { resolvers as toursResolver } from "./tours";

export default mergeResolvers<ResolverContext, any>([
  baseResolver,
  pagesResolver,
  toursResolver,
]);
