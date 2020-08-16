import * as TG from "type-graphql";

import { ItineraryDay } from "../itinerary-day";

@TG.ObjectType({ description: "Represents an itinerary for a tour" })
export class Itinerary {
  @TG.Field((_type) => [ItineraryDay])
  days!: ItineraryDay[];
}
