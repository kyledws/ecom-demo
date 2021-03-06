import * as TG from "type-graphql";

import { WebpageContent } from "./type";

@TG.Resolver(WebpageContent)
export class WebpageContentResolver {
  @TG.Query((_returns) => WebpageContent)
  webpageContent(@TG.Arg("id", () => TG.Int) id: number): WebpageContent | null {
    return null;
  }
}
