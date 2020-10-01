import * as TG from "type-graphql";

import { SeoMetadata, Webpage, Website } from "../../type";
import { WebpageContent } from "local/schema/webpage-content";

@TG.ObjectType({
  description: "Represents a tour page on the Music website",
  implements: Webpage,
})
export class MusicArtistPage implements Webpage {
  @TG.Field((_type) => MusicArtistPageContentSlots, { nullable: true })
  contentSlots?: MusicArtistPageContentSlots;

  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  site: Website = Website.MUSIC;

  @TG.Field()
  type = "TourPage";
}

@TG.ObjectType()
class MusicArtistPageContentSlots {
  @TG.Field((_type) => [WebpageContent])
  aboveDescription!: WebpageContent[];
}
