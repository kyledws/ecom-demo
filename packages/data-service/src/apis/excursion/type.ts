import * as TG from "type-graphql";

@TG.ObjectType({ description: "Represents an excursion on a tour" })
export class Excursion {
  @TG.Field({ nullable: true })
  description?: string;

  @TG.Field({ nullable: true })
  image?: string;

  @TG.Field()
  itemMatchCode!: string;

  @TG.Field({ nullable: true })
  title?: string;
}
