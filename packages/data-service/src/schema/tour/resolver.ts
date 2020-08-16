import * as TG from "type-graphql";

import { Tour } from "./type";

@TG.Resolver(Tour)
export class TourResolver {
  @TG.Query((_returns) => Tour)
  tour(@TG.Arg("tourCodeYear") tourCodeYear: string): Tour {
    return new Tour();
  }
}
