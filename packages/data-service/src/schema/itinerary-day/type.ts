import * as TG from "type-graphql";

import { Excursion } from "../excursion";

@TG.ObjectType({ description: "Represents an excursion on a tour" })
export class ItineraryDay {
  @TG.Field({ nullable: true })
  description?: string;

  @TG.Field((_type) => [Excursion])
  excursions?: Excursion[];

  @TG.Field({ nullable: true })
  title?: string;
}
