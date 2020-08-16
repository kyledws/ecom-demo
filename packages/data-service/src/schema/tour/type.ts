import * as TG from "type-graphql";

import { Departure } from "../departure";
import { Itinerary } from "../itinerary";

@TG.ObjectType({ description: "Represents a single departure" })
export class Tour {
  @TG.Field((_type) => [Departure])
  departures!: Departure[];

  @TG.Field({ nullable: true })
  description?: string;

  @TG.Field((_type) => Itinerary, { nullable: true })
  itinerary?: Itinerary;

  @TG.Field({ nullable: true })
  title?: string;

  @TG.Field()
  tourCodeYear!: number;
}
