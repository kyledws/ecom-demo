import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a single departure" })
export class Departure {
  constructor(args: ConstructorArgs<Departure>) {
    this.calendarYear = args.calendarYear;
    this.departure = args.departure;
    this.return = args.return;
    this.gateway = args.gateway;
    this.tourCode = args.tourCode;
    this.tourYear = args.tourYear;
    this.tripId = args.tripId;
  }

  @TG.Field((_type) => TG.Int)
  calendarYear: number;

  @TG.Field()
  departure: Date;

  @TG.Field()
  return: Date;

  @TG.Field()
  gateway: string;

  @TG.Field()
  tourCode: string;

  @TG.Field((_type) => TG.Int)
  tourYear: number;

  @TG.Field((_type) => TG.Int)
  tripId: number;
}
