import { buildSchema } from "type-graphql";

import { AlbumResolver } from "./album";
import { MusicLandingPageResolver } from "./webpage";
import { WebpageContentResolver } from "./webpage-content";

export const schema = buildSchema({
  dateScalarMode: "timestamp",
  resolvers: [AlbumResolver, MusicLandingPageResolver, WebpageContentResolver],
});
