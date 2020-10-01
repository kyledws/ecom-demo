import * as TG from "type-graphql";

import { Artist } from "./type";
import { ResolverContext } from "local/schema/context";

@TG.ArgsType()
class ArtistQueryArgs {
  @TG.Field((_type) => TG.Int)
  id!: number;
}

@TG.Resolver(Artist)
export class ArtistResolver {
  @TG.Query((_returns) => Artist)
  async artist(
    @TG.Args() args: ArtistQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<Artist> {
    return null as any;
  }
}
