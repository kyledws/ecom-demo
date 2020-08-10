import { gql } from "apollo-server";

export const typeDef = gql`
  extend type Query {
    departuresForOne(tourCodeYear: String!, gateway: String): [Departure!]!
    departuresForMany(tourCodeYear: [String!]!, gateway: String): [Departure!]!
    excursion(itemMatchCode: String!): Excursion
    excursions(itemMatchCodes: [String!]!): [Excursion!]!
    tour(tourCodeYear: String!): Tour
    tours(tourCodeYears: [String!]!): [Tour!]!
  }

  type Departure {
    departure: Date
    return: Date
    gateway: String
    tripId: Int
    year: Int
  }

  type Excursion {
    description: String
    image: String
    itemMatchCode: String!
    title: String!
  }

  type Itinerary {
    days: [ItineraryDay!]!
  }

  type ItineraryDay {
    description: String
    excursions: Excursion
    title: String!
  }

  type Tour {
    departures(year: Int, gateway: String): [Departure!]!
    description: String
    itinerary: Itinerary
    title: String!
    tourCodeYear: String!
  }
`;
