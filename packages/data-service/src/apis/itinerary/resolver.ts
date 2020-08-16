import * as TG from "type-graphql";

import { Itinerary } from "./type";

@TG.Resolver((_of) => Itinerary)
export class ItineraryResolver {
  @TG.Query((_returns) => Itinerary)
  itinerary(@TG.Arg("tourCodeYear") tourCodeYear: string): Itinerary {
    return new Itinerary();
  }
}