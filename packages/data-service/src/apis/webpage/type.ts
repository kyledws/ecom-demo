import * as TG from "type-graphql";

export enum Website {
  ACCOUNT,
  CHECKOUT,
  TOURS,
}

TG.registerEnumType(Website, {
  name: "Website",
  description: "Identify for one of the websites",
});

@TG.ObjectType()
export class SeoMetadata {
  @TG.Field({ nullable: true })
  description?: string;

  @TG.Field({ nullable: true })
  title?: string;
}

@TG.InterfaceType({ description: "Represents a page of a website" })
export abstract class Webpage {
  @TG.Field({ nullable: true })
  description?: string;

  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  site!: Website;

  @TG.Field({ nullable: true })
  title?: string;

  @TG.Field()
  type!: string;
}
