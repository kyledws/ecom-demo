import * as TG from "type-graphql";

import { getThing } from "local/repository/apple-music";
import { ResolverContext } from "local/schema/context";
import { Song } from "./type";

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
    console.log(await getThing());

    return null as any;
  }
}
