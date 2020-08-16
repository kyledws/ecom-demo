import * as TG from "type-graphql";

import { Website } from "../../type";
import { ToursLandingPage } from "./type";

@TG.Resolver((_of) => ToursLandingPage)
export class ToursLandingPageResolver {
  @TG.Query((_returns) => ToursLandingPage)
  webpage(
    @TG.Arg("site", (_type) => Website) site: Website,
    @TG.Arg("fullSlug") fullSlug: string
  ): ToursLandingPage {
    return new ToursLandingPage();
  }
}
