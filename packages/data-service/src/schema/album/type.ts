import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a single album" })
export class Album {
  constructor(args: ConstructorArgs<Album>) {
    this.albumName = args.albumName;
    this.artistName = args.artistName;
    // this.artwork = args.artwork;
    this.contentRating = args.contentRating;
    this.copyright = args.copyright;
    // this.editorialNotes = args.editorialNotes;
    this.genreNames = args.genreNames;
    this.isComplete = args.isComplete;
    this.isMasteredForItunes = args.isMasteredForItunes;
    this.isSingle = args.isSingle;
    this.name = args.name;
    // this.playParams = args.playParams;
    this.recordLabel = args.recordLabel;
    this.releaseDate = args.releaseDate;
    this.trackCount = args.trackCount;
    this.url = args.url;
  }

  @TG.Field()
  albumName: string;

  @TG.Field()
  artistName: string;

  // @TG.Field()
  // artwork: any;

  @TG.Field()
  contentRating: string;

  @TG.Field()
  copyright: string;

  // @TG.Field()
  // editorialNotes: any;

  @TG.Field()
  genreNames: string[];

  @TG.Field()
  isComplete: boolean;

  @TG.Field()
  isMasteredForItunes: boolean;

  @TG.Field()
  isSingle: boolean;

  @TG.Field()
  name: string;

  // @TG.Field()
  // playParams: any;

  @TG.Field()
  recordLabel: string;

  @TG.Field()
  releaseDate: Date;

  @TG.Field((_type) => TG.Int)
  trackCount: number;

  @TG.Field()
  url: string;
}
