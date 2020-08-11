import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { ResolverContext } from "../../apis/context";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Query = {
  readonly _empty?: Maybe<Scalars["String"]>;
  readonly contentForOne?: Maybe<Content>;
  readonly contentForMany: ReadonlyArray<Content>;
  readonly page?: Maybe<Page>;
  readonly departuresForOne: ReadonlyArray<Departure>;
  readonly departuresForMany: ReadonlyArray<Departure>;
  readonly excursion?: Maybe<Excursion>;
  readonly excursions: ReadonlyArray<Excursion>;
  readonly tour?: Maybe<Tour>;
  readonly tours: ReadonlyArray<Tour>;
};

export type QueryContentForOneArgs = {
  id: Scalars["Int"];
};

export type QueryContentForManyArgs = {
  id: ReadonlyArray<Scalars["Int"]>;
};

export type QueryPageArgs = {
  site: Site;
  fullSlug: Scalars["String"];
};

export type QueryDeparturesForOneArgs = {
  tourCodeYear: Scalars["String"];
  gateway?: Maybe<Scalars["String"]>;
};

export type QueryDeparturesForManyArgs = {
  tourCodeYear: ReadonlyArray<Scalars["String"]>;
  gateway?: Maybe<Scalars["String"]>;
};

export type QueryExcursionArgs = {
  itemMatchCode: Scalars["String"];
};

export type QueryExcursionsArgs = {
  itemMatchCodes: ReadonlyArray<Scalars["String"]>;
};

export type QueryTourArgs = {
  tourCodeYear: Scalars["String"];
};

export type QueryToursArgs = {
  tourCodeYears: ReadonlyArray<Scalars["String"]>;
};

export enum Site {
  Account = "ACCOUNT",
  Checkout = "CHECKOUT",
  Tours = "TOURS",
}

export type Content = {
  readonly body: Scalars["String"];
  readonly fullSlug: Scalars["String"];
  readonly id: Scalars["Int"];
  readonly type: Scalars["String"];
};

export type Page = {
  readonly seoMetadata?: Maybe<SeoMetadata>;
  readonly type: Scalars["String"];
};

export type SeoMetadata = {
  readonly pageDescription?: Maybe<Scalars["String"]>;
  readonly pageTitle?: Maybe<Scalars["String"]>;
};

export type ToursLandingPage = Page & {
  readonly content: ReadonlyArray<Content>;
  readonly seoMetadata?: Maybe<SeoMetadata>;
  readonly type: Scalars["String"];
};

export type ToursTourPage = Page & {
  readonly contentSlots?: Maybe<ToursTourPageContentSlots>;
  readonly contentTours: ReadonlyArray<Tour>;
  readonly pricerTours: ReadonlyArray<Tour>;
  readonly seoMetadata?: Maybe<SeoMetadata>;
  readonly type: Scalars["String"];
};

export type ToursTourPageContentSlots = {
  readonly aboveDescription: ReadonlyArray<Content>;
};

export type Departure = {
  readonly departure?: Maybe<Scalars["Date"]>;
  readonly return?: Maybe<Scalars["Date"]>;
  readonly gateway?: Maybe<Scalars["String"]>;
  readonly tripId?: Maybe<Scalars["Int"]>;
  readonly year?: Maybe<Scalars["Int"]>;
};

export type Excursion = {
  readonly description?: Maybe<Scalars["String"]>;
  readonly image?: Maybe<Scalars["String"]>;
  readonly itemMatchCode: Scalars["String"];
  readonly title: Scalars["String"];
};

export type Itinerary = {
  readonly days: ReadonlyArray<ItineraryDay>;
};

export type ItineraryDay = {
  readonly description?: Maybe<Scalars["String"]>;
  readonly excursions?: Maybe<Excursion>;
  readonly title: Scalars["String"];
};

export type Tour = {
  readonly departures: ReadonlyArray<Departure>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly itinerary?: Maybe<Itinerary>;
  readonly title: Scalars["String"];
  readonly tourCodeYear: Scalars["String"];
};

export type TourDeparturesArgs = {
  year?: Maybe<Scalars["Int"]>;
  gateway?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<
  TResult,
  TParent,
  TContext,
  TArgs
>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Site: Site;
  Content: ResolverTypeWrapper<Content>;
  Page: ResolversTypes["ToursLandingPage"] | ResolversTypes["ToursTourPage"];
  SeoMetadata: ResolverTypeWrapper<SeoMetadata>;
  ToursLandingPage: ResolverTypeWrapper<ToursLandingPage>;
  ToursTourPage: ResolverTypeWrapper<ToursTourPage>;
  ToursTourPageContentSlots: ResolverTypeWrapper<ToursTourPageContentSlots>;
  Departure: ResolverTypeWrapper<Departure>;
  Excursion: ResolverTypeWrapper<Excursion>;
  Itinerary: ResolverTypeWrapper<Itinerary>;
  ItineraryDay: ResolverTypeWrapper<ItineraryDay>;
  Tour: ResolverTypeWrapper<Tour>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars["String"];
  Int: Scalars["Int"];
  Date: Scalars["Date"];
  DateTime: Scalars["DateTime"];
  Content: Content;
  Page: ResolversParentTypes["ToursLandingPage"] | ResolversParentTypes["ToursTourPage"];
  SeoMetadata: SeoMetadata;
  ToursLandingPage: ToursLandingPage;
  ToursTourPage: ToursTourPage;
  ToursTourPageContentSlots: ToursTourPageContentSlots;
  Departure: Departure;
  Excursion: Excursion;
  Itinerary: Itinerary;
  ItineraryDay: ItineraryDay;
  Tour: Tour;
  Boolean: Scalars["Boolean"];
};

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  _empty?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  contentForOne?: Resolver<
    Maybe<ResolversTypes["Content"]>,
    ParentType,
    ContextType,
    RequireFields<QueryContentForOneArgs, "id">
  >;
  contentForMany?: Resolver<
    ReadonlyArray<ResolversTypes["Content"]>,
    ParentType,
    ContextType,
    RequireFields<QueryContentForManyArgs, "id">
  >;
  page?: Resolver<
    Maybe<ResolversTypes["Page"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPageArgs, "site" | "fullSlug">
  >;
  departuresForOne?: Resolver<
    ReadonlyArray<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDeparturesForOneArgs, "tourCodeYear">
  >;
  departuresForMany?: Resolver<
    ReadonlyArray<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDeparturesForManyArgs, "tourCodeYear">
  >;
  excursion?: Resolver<
    Maybe<ResolversTypes["Excursion"]>,
    ParentType,
    ContextType,
    RequireFields<QueryExcursionArgs, "itemMatchCode">
  >;
  excursions?: Resolver<
    ReadonlyArray<ResolversTypes["Excursion"]>,
    ParentType,
    ContextType,
    RequireFields<QueryExcursionsArgs, "itemMatchCodes">
  >;
  tour?: Resolver<
    Maybe<ResolversTypes["Tour"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTourArgs, "tourCodeYear">
  >;
  tours?: Resolver<
    ReadonlyArray<ResolversTypes["Tour"]>,
    ParentType,
    ContextType,
    RequireFields<QueryToursArgs, "tourCodeYears">
  >;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type ContentResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Content"] = ResolversParentTypes["Content"]
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fullSlug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Page"] = ResolversParentTypes["Page"]
> = {
  __resolveType: TypeResolveFn<
    "ToursLandingPage" | "ToursTourPage",
    ParentType,
    ContextType
  >;
  seoMetadata?: Resolver<Maybe<ResolversTypes["SeoMetadata"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type SeoMetadataResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["SeoMetadata"] = ResolversParentTypes["SeoMetadata"]
> = {
  pageDescription?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pageTitle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ToursLandingPageResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ToursLandingPage"] = ResolversParentTypes["ToursLandingPage"]
> = {
  content?: Resolver<ReadonlyArray<ResolversTypes["Content"]>, ParentType, ContextType>;
  seoMetadata?: Resolver<Maybe<ResolversTypes["SeoMetadata"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ToursTourPageResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ToursTourPage"] = ResolversParentTypes["ToursTourPage"]
> = {
  contentSlots?: Resolver<
    Maybe<ResolversTypes["ToursTourPageContentSlots"]>,
    ParentType,
    ContextType
  >;
  contentTours?: Resolver<ReadonlyArray<ResolversTypes["Tour"]>, ParentType, ContextType>;
  pricerTours?: Resolver<ReadonlyArray<ResolversTypes["Tour"]>, ParentType, ContextType>;
  seoMetadata?: Resolver<Maybe<ResolversTypes["SeoMetadata"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ToursTourPageContentSlotsResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ToursTourPageContentSlots"] = ResolversParentTypes["ToursTourPageContentSlots"]
> = {
  aboveDescription?: Resolver<
    ReadonlyArray<ResolversTypes["Content"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DepartureResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Departure"] = ResolversParentTypes["Departure"]
> = {
  departure?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  return?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  gateway?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  tripId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ExcursionResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Excursion"] = ResolversParentTypes["Excursion"]
> = {
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  itemMatchCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ItineraryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Itinerary"] = ResolversParentTypes["Itinerary"]
> = {
  days?: Resolver<ReadonlyArray<ResolversTypes["ItineraryDay"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ItineraryDayResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ItineraryDay"] = ResolversParentTypes["ItineraryDay"]
> = {
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  excursions?: Resolver<Maybe<ResolversTypes["Excursion"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TourResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Tour"] = ResolversParentTypes["Tour"]
> = {
  departures?: Resolver<
    ReadonlyArray<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<TourDeparturesArgs, never>
  >;
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  itinerary?: Resolver<Maybe<ResolversTypes["Itinerary"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tourCodeYear?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  Query?: QueryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Content?: ContentResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  SeoMetadata?: SeoMetadataResolvers<ContextType>;
  ToursLandingPage?: ToursLandingPageResolvers<ContextType>;
  ToursTourPage?: ToursTourPageResolvers<ContextType>;
  ToursTourPageContentSlots?: ToursTourPageContentSlotsResolvers<ContextType>;
  Departure?: DepartureResolvers<ContextType>;
  Excursion?: ExcursionResolvers<ContextType>;
  Itinerary?: ItineraryResolvers<ContextType>;
  ItineraryDay?: ItineraryDayResolvers<ContextType>;
  Tour?: TourResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResolverContext> = Resolvers<ContextType>;
