import { gql } from "apollo-server";

export const typeDef = gql`
  extend type Query {
    contentForOne(id: Int!): Content
    contentForMany(id: [Int!]!): [Content!]!
    page(site: Site!, fullSlug: String!): Page
  }

  enum Site {
    ACCOUNT
    CHECKOUT
    TOURS
  }

  type Content {
    body: String!
    fullSlug: String!
    id: Int!
    type: String!
  }

  interface Page {
    seoMetadata: SeoMetadata
  }

  type SeoMetadata {
    pageDescription: String
    pageTitle: String
  }

  type ToursLandingPage implements Page {
    content: [Content!]!
  }

  type ToursTourPage implements Page {
    contentSlots: ToursTourPageContentSlots
    contentTours: [Tour!]!
    pricerTours: [Tour!]!
  }

  type ToursTourPageContentSlots {
    aboveDescription: [Content!]!
  }
`;
