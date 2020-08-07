import { ApolloServer, IFieldResolver } from "apollo-server";
import { config } from "dotenv";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";

import * as CMS from "./repositories/graphcms";

import { Page, QueryPageArgs } from "./generated/data-service";

config();

type Resolver<T> = IFieldResolver<unknown, unknown, T>;

type Resolvers = {
  readonly Query: {
    readonly [key: string]: IFieldResolver<unknown, unknown, QueryPageArgs>;
  };
};

const getPage: Resolver<QueryPageArgs> = async (_, args): Promise<Page | null> => {
  const type = await CMS.getPage(args.fullSlug);
  return type.isJust() ? type.extract() : null;
};

const resolvers: Resolvers = {
  Query: {
    page: getPage,
  },
};

const typeFiles = loadFilesSync(path.join(__dirname, "../schema"));
const typeDefs = mergeTypeDefs(typeFiles);

new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
