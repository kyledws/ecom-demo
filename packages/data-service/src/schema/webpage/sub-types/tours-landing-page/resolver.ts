import * as TG from "type-graphql";

import { ResolverContext } from "local/schema/context";
import { ToursLandingPage } from "./type";
import { Website } from "../../type";
import * as Facade from "./facade";

@TG.ArgsType()
class WebsiteQueryArgs {
  @TG.Field()
  fullSlug!: string;

  @TG.Field((_type) => Website)
  site!: Website;
}

@TG.Resolver(ToursLandingPage)
export class ToursLandingPageResolver {
  @TG.Query((_returns) => ToursLandingPage)
  async webpage(
    @TG.Args() args: WebsiteQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<ToursLandingPage | null> {
    return (
      await Facade.getToursLandingPage({
        ...args,
        ...context,
      })
    ).extractNullable();
  }
}
