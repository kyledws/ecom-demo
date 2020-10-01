import * as TG from "type-graphql";

import { Album } from "./type";
import { ResolverContext } from "local/schema/context";

@TG.ArgsType()
class AlbumQueryArgs {
  @TG.Field((_type) => TG.Int)
  id!: number;
}

@TG.Resolver(Album)
export class AlbumResolver {
  @TG.Query((_returns) => Album)
  async album(
    @TG.Args() args: AlbumQueryArgs,
    @TG.Ctx() context: ResolverContext
  ): Promise<Album> {
    return null as any;
  }
}
