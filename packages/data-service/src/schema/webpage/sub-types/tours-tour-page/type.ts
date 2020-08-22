import * as TG from "type-graphql";

import { SeoMetadata, Webpage, Website } from "../../type";
import { Tour } from "local/schema/tour";
import { WebpageContent } from "local/schema/webpage-content";

@TG.ObjectType({
  description: "Represents a tour page on the Tours website",
  implements: Webpage,
})
export class ToursTourPage implements Webpage {
  @TG.Field((_type) => ToursTourPageContentSlots, { nullable: true })
  contentSlots?: ToursTourPageContentSlots;

  @TG.Field((_type) => [Tour])
  contentTours!: Tour[];

  @TG.Field((_type) => [Tour])
  pricerTours!: Tour[];

  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  site: Website = Website.TOURS;

  @TG.Field()
  type = "TourPage";
}

@TG.ObjectType()
class ToursTourPageContentSlots {
  @TG.Field((_type) => [WebpageContent])
  aboveDescription!: WebpageContent[];
}
