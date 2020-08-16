import * as TG from "type-graphql";

import { Excursion } from "./type";
@TG.Resolver(Excursion)
export class ExcursionResolver {
  @TG.Query((_returns) => Excursion)
  excursion(@TG.Arg("itemMatchCode") code: string): Excursion {
    return new Excursion();
  }

  @TG.Query((_returns) => [Excursion])
  excursionsForTour(@TG.Arg("tourCodeYear") tourCodeYear: string): [Excursion] {
    return [new Excursion()];
  }
}
