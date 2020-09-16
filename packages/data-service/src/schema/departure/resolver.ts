import * as TG from "type-graphql";

import { Departure } from "./type";
import { ResolverContext } from "local/schema/context";

@TG.ArgsType()
class DeparturesQueryArgs {
  @TG.Field()
  gateway!: string;

  @TG.Field()
  tourCode!: string;
}

@TG.Resolver(Departure)
export class DepartureResolver {
  @TG.Query((_returns) => [Departure])
  async departures(
    @TG.Args() args: DeparturesQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<Departure[]> {
    const data = await context.dataClient.request(
      `
        query($gateway: String!, $tourCodes: [String!]!) {
          departures: getDepartures(GateCode: $gateway, TourCodes: $tourCodes) {
            CalendarYear
            Departures {
              DepartureDate
              ReturnDate
              TourCode
              TourYear
              TripId
            }
          }
        }
      `,
      { gateway: args.gateway, tourCodes: [args.tourCode] }
    );
    return data.departures.flatMap((g: any) =>
      g.Departures.map(
        (d: any) =>
          new Departure({
            calendarYear: parseInt(g.CalendarYear),
            departure: new Date(parseInt(d.DepartureDate)),
            return: new Date(parseInt(d.ReturnDate)),
            gateway: args.gateway,
            tourCode: args.tourCode,
            tourYear: parseInt(d.TourYear),
            tripId: parseInt(d.TripId),
          })
      )
    );
  }
}
