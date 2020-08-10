import { mergeTypeDefs } from "@graphql-tools/merge";

import { typeDef as baseTypeDef } from "./base";
import { typeDef as pagesTypeDef } from "./pages";
import { typeDef as toursTypeDef } from "./tours";

export default mergeTypeDefs([baseTypeDef, pagesTypeDef, toursTypeDef]);
