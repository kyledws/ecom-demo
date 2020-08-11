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
    type: String!
  }

  type SeoMetadata {
    pageDescription: String
    pageTitle: String
  }

  type ToursLandingPage implements Page {
    content: [Content!]!
    seoMetadata: SeoMetadata
    type: String!
  }

  type ToursTourPage implements Page {
    contentSlots: ToursTourPageContentSlots
    contentTours: [Tour!]!
    pricerTours: [Tour!]!
    seoMetadata: SeoMetadata
    type: String!
  }

  type ToursTourPageContentSlots {
    aboveDescription: [Content!]!
  }
`;
