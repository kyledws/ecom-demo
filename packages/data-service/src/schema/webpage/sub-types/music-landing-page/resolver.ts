import * as TG from "type-graphql";

import { ResolverContext } from "local/schema/context";
import { MusicLandingPage } from "./type";
import { Website } from "../../type";
import * as Facade from "./facade";

@TG.ArgsType()
class WebsiteQueryArgs {
  @TG.Field()
  fullSlug!: string;

  @TG.Field((_type) => Website)
  site!: Website;
}

@TG.Resolver(MusicLandingPage)
export class MusicLandingPageResolver {
  @TG.Query((_returns) => MusicLandingPage)
  async webpage(
    @TG.Args() args: WebsiteQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<MusicLandingPage | null> {
    return (
      await Facade.getMusicLandingPage({
        ...args,
        ...context,
      })
    ).match({
      ok: (v) => v,
      err: () => null,
    });
  }
}
