import * as TG from "type-graphql";

import { Song } from "./type";
import { ResolverContext } from "local/schema/context";

@TG.ArgsType()
class SongQueryArgs {
  @TG.Field((_type) => TG.Int)
  id!: number;
}

@TG.Resolver(Song)
export class SongResolver {
  @TG.Query((_returns) => Song)
  async song(
    @TG.Args() args: SongQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<Song> {
    return null as any;
  }
}
