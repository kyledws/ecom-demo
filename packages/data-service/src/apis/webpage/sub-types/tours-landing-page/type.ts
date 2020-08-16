import * as TG from "type-graphql";

import { SeoMetadata, Webpage, Website } from "../../type";
import { WebpageContent } from "local/apis/webpage-content";

@TG.ObjectType({ description: "Represents a landing page on the Tours website" })
export class ToursLandingPage implements Webpage {
  @TG.Field((_type) => [WebpageContent])
  content!: WebpageContent[];

  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  get site(): Website {
    return Website.TOURS;
  }

  @TG.Field()
  type!: string;

  constructor() {
    this.type = "LandingPage";
    this.seoMetadata = new SeoMetadata();
    this.seoMetadata.description = "Description";
    this.seoMetadata.title = "Title";
  }
}
