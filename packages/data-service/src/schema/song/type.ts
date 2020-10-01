import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents a single album" })
export class Song {
  constructor(args: ConstructorArgs<Song>) {
    this.albumName = args.albumName;
    this.artistName = args.artistName;
    // this.artwork = args.artwork;
    this.composerName = args.composerName;
    this.contentRating = args.contentRating;
    this.discNumber = args.discNumber;
    this.durationInMillis = args.durationInMillis;
    // this.editorialNotes = args.editorialNotes;
    this.genreNames = args.genreNames;
    this.isrc = args.isrc;
    this.name = args.name;
    // this.playParams = args.playParams;
    // this.previews = args.previews;
    this.releaseDate = args.releaseDate;
    this.trackNumber = args.trackNumber;
    this.url = args.url;
  }

  @TG.Field()
  albumName: string;

  @TG.Field()
  artistName: string;

  // @TG.Field()
  // artwork: any;

  @TG.Field()
  composerName: string;

  @TG.Field()
  contentRating: string;

  @TG.Field((_type) => TG.Int)
  discNumber: number;

  @TG.Field((_type) => TG.Int)
  durationInMillis: number;

  // @TG.Field()
  // editorialNotes: any;

  @TG.Field()
  genreNames: string[];

  @TG.Field()
  isrc: string;

  @TG.Field()
  name: string;

  // @TG.Field()
  // playParams: any;

  // @TG.Field()
  // previews: any;

  @TG.Field()
  releaseDate: Date;

  @TG.Field((_type) => TG.Int)
  trackNumber: number;

  @TG.Field()
  url: string;
}
