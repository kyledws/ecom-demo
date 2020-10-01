import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a single album" })
export class Artist {
  constructor(args: ConstructorArgs<Artist>) {
    // this.editorialNotes = args.editorialNotes;
    this.genreNames = args.genreNames;
    this.name = args.name;
    this.url = args.url;
  }

  // @TG.Field()
  // editorialNotes: any;

  @TG.Field()
  genreNames: string[];

  @TG.Field()
  name: string;

  @TG.Field()
  url: string;
}
