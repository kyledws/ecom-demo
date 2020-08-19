import { buildSchema } from "type-graphql";

import { DepartureResolver } from "./departure";
import { ExcursionResolver } from "./excursion";
import { ItineraryResolver } from "./itinerary";
import { TourResolver } from "./tour";
import { ToursLandingPageResolver } from "./webpage";
import { WebpageContentResolver } from "./webpage-content";

export const schema = buildSchema({
  dateScalarMode: "timestamp",
  resolvers: [
    DepartureResolver,
    ExcursionResolver,
    ItineraryResolver,
    TourResolver,
    ToursLandingPageResolver,
    WebpageContentResolver,
  ],
});
