import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a single departure" })
export class Departure {
  @TG.Field()
  departure!: Date;

  @TG.Field()
  return!: Date;

  @TG.Field()
  gateway!: string;

  @TG.Field((_type) => TG.Int)
  tripId!: number;

  @TG.Field((_type) => TG.Int)
  year!: number;
}
