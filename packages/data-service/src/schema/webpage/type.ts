import * as TG from "type-graphql";

export enum Website {
  MUSIC,
}

TG.registerEnumType(Website, {
  description: "Identifier for one of the websites",
  name: "Website",
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
  @TG.Field((_type) => SeoMetadata, { nullable: true })
  seoMetadata?: SeoMetadata;

  @TG.Field((_type) => Website)
  site!: Website;

  @TG.Field()
  type!: string;
}
