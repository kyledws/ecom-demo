import { gql } from "apollo-server";

export const typeDef = gql`
  schema {
    query: Query
  }

  type Query {
    _empty: String
  }

  scalar Date

  scalar DateTime
`;
