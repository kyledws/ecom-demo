import * as TG from "type-graphql";

import { Departure } from "./type";

@TG.Resolver(Departure)
export class DepartureResolver {
  @TG.Query((_returns) => [Departure])
  departures(
    @TG.Arg("gateway") gateway: string,
    @TG.Arg("tourCodeYear") tourCodeYear: string
  ): Departure {
    return new Departure();
  }
}
