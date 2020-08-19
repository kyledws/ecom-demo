import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a piece of content on the page" })
export class WebpageContent {
  constructor(args: ConstructorArgs<WebpageContent>) {
    this.body = args.body;
    this.fullSlug = args.fullSlug;
    this.id = args.id;
    this.type = args.type;
  }

  @TG.Field()
  body: string;

  @TG.Field()
  fullSlug: string;

  @TG.Field((_type) => TG.Int)
  id: number;

  @TG.Field()
  type: string;
}
