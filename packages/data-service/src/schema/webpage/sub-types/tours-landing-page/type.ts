import * as TG from "type-graphql";

import { SeoMetadata, Webpage, Website } from "../../type";
import { WebpageContent } from "local/schema/webpage-content";

@TG.ObjectType({
  description: "Represents a landing page on the Tours website",
  implements: Webpage,
})
export class ToursLandingPage implements Webpage {
  constructor(args: ConstructorArgs<ToursLandingPage>) {
    this.content = args.content;
    this.seoMetadata = args.seoMetadata;
  }

  @TG.Field((_type) => [WebpageContent])
  content!: WebpageContent[];

  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  get site(): Website {
    return Website.TOURS;
  }

  @TG.Field()
  get type(): string {
    return "LandingPage";
  }
}
