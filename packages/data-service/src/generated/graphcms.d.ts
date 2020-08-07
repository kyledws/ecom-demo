import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  Hex: any;
  RGBATransparency: any;
  /** Raw JSON value */
  Json: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  RGBAHue: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
};

/** An edge in a connection. */
export type PageEdge = {
  /** The item at the end of the edge. */
  readonly node: Page;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PageWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PageWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly fullSlug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly fullSlug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fullSlug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly fullSlug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly fullSlug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fullSlug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fullSlug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly fullSlug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fullSlug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fullSlug_not_ends_with?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PageType>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PageType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PageType>>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PageType>>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
};


export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}


/** Asset system model */
export type Asset = Node & {
  /** System stage field */
  readonly stage: Stage;
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  readonly handle: Scalars['String'];
  /** The file name */
  readonly fileName: Scalars['String'];
  /** The height of the file */
  readonly height?: Maybe<Scalars['Float']>;
  /** The file width */
  readonly width?: Maybe<Scalars['Float']>;
  /** The file size */
  readonly size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  readonly mimeType?: Maybe<Scalars['String']>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: ReadonlyArray<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type Page = Node & {
  /** System stage field */
  readonly stage: Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Page>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly fullSlug: Scalars['String'];
  readonly type: PageType;
  readonly title: Scalars['String'];
  /** List of Page versions */
  readonly history: ReadonlyArray<Version>;
};


export type PageDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

/** An edge in a connection. */
export type AssetEdge = {
  /** The item at the end of the edge. */
  readonly node: Asset;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: Maybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: Maybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: Maybe<ReadonlyArray<Locale>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: AssetWhereInput;
  /** Update many input */
  readonly data: AssetUpdateManyInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PageWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PageWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly fullSlug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly fullSlug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fullSlug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly fullSlug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly fullSlug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fullSlug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fullSlug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly fullSlug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fullSlug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fullSlug_not_ends_with?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PageType>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PageType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PageType>>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PageType>>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  readonly before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  readonly start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  readonly end?: Maybe<Scalars['Boolean']>;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}


/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type PageCreateInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly fullSlug: Scalars['String'];
  readonly type: PageType;
  readonly title: Scalars['String'];
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns AST representation */
  readonly raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  readonly html: Scalars['String'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String'];
};


/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
  /** The Stage of an object */
  readonly stage: Stage;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['Long'];
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: PageWhereInput;
  /** Update many input */
  readonly data: PageUpdateManyInput;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}


export type Aggregate = {
  readonly count: Scalars['Int'];
};

export type VersionWhereInput = {
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
  /** Document to update */
  readonly data: AssetUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: PageWhereUniqueInput;
  /** Upsert data */
  readonly data: PageUpsertInput;
};


export type DocumentVersion = {
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
  readonly data?: Maybe<Scalars['Json']>;
};

export type AssetUpsertLocalizationInput = {
  readonly update: AssetUpdateLocalizationDataInput;
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
  /** Upsert data */
  readonly data: AssetUpsertInput;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly r: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly b: Scalars['RGBAHue'];
  readonly a: Scalars['RGBATransparency'];
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: Maybe<ImageFit>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly image?: Maybe<ImageTransformationInput>;
  readonly document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: Maybe<Scalars['Boolean']>;
};


/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly hex: Scalars['Hex'];
  readonly rgba: Rgba;
  readonly css: Scalars['String'];
};

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
  readonly distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  readonly format?: Maybe<DocumentFileTypes>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  FullSlugAsc = 'fullSlug_ASC',
  FullSlugDesc = 'fullSlug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type AssetUpdateInput = {
  readonly handle?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  readonly localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

/** A connection to a list of items. */
export type PageConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<PageEdge>;
  readonly aggregate: Aggregate;
};

export type PageUpdateInput = {
  readonly fullSlug?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PageType>;
  readonly title?: Maybe<Scalars['String']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly r: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly b: Scalars['RGBAHue'];
  readonly a: Scalars['RGBATransparency'];
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export type AssetUpdateManyInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** Optional updates to localizations */
  readonly localizations?: Maybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  readonly createAsset?: Maybe<Asset>;
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Update many assets */
  readonly updateManyAssets: BatchPayload;
  /** Delete many Asset documents */
  readonly deleteManyAssets: BatchPayload;
  /** Publish many Asset documents */
  readonly publishManyAssets: BatchPayload;
  /** Unpublish many Asset documents */
  readonly unpublishManyAssets: BatchPayload;
  /** Create one page */
  readonly createPage?: Maybe<Page>;
  /** Update one page */
  readonly updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  readonly deletePage?: Maybe<Page>;
  /** Upsert one page */
  readonly upsertPage?: Maybe<Page>;
  /** Publish one page */
  readonly publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishPage?: Maybe<Page>;
  /** Update many pages */
  readonly updateManyPages: BatchPayload;
  /** Delete many Page documents */
  readonly deleteManyPages: BatchPayload;
  /** Publish many Page documents */
  readonly publishManyPages: BatchPayload;
  /** Unpublish many Page documents */
  readonly unpublishManyPages: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};


export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: ReadonlyArray<Stage>;
};


export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: ReadonlyArray<Stage>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: Maybe<Scalars['String']>;
};

export type AssetCreateInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: Maybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type PageUpdateManyInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly type: PageType;
  readonly title: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: Maybe<Scalars['Hex']>;
  readonly rgba?: Maybe<RgbaInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve a single asset */
  readonly asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve document version */
  readonly assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  readonly pages: ReadonlyArray<Page>;
  /** Retrieve a single page */
  readonly page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  readonly pagesConnection: PageConnection;
  /** Retrieve document version */
  readonly pageVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
};


export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  readonly aggregate: Aggregate;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly fullSlug?: Maybe<Scalars['String']>;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: PageCreateInput;
  /** Update document if it exists */
  readonly update: PageUpdateInput;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: Maybe<DocumentOutputInput>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: Maybe<ImageResizeInput>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type Version = {
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
};

/** Type of this page */
export enum PageType {
  Home = 'home',
  Product = 'product'
}

export type AssetUpdateLocalizationDataInput = {
  readonly handle?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly fileName: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: PageWhereUniqueInput;
  /** Document to update */
  readonly data: PageUpdateInput;
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  PageEdge: ResolverTypeWrapper<PageEdge>;
  String: ResolverTypeWrapper<Scalars['String']>;
  PageManyWhereInput: PageManyWhereInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  _FilterKind: _FilterKind;
  RichTextAST: ResolverTypeWrapper<Scalars['RichTextAST']>;
  Asset: ResolverTypeWrapper<Asset>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Page: ResolverTypeWrapper<Page>;
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation;
  AssetEdge: ResolverTypeWrapper<AssetEdge>;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  PageWhereInput: PageWhereInput;
  ConnectPositionInput: ConnectPositionInput;
  _RelationKind: _RelationKind;
  Hex: ResolverTypeWrapper<Scalars['Hex']>;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  PageCreateInput: PageCreateInput;
  _MutationKind: _MutationKind;
  RichText: ResolverTypeWrapper<RichText>;
  RGBATransparency: ResolverTypeWrapper<Scalars['RGBATransparency']>;
  Node: ResolversTypes['Asset'] | ResolversTypes['Page'];
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  DocumentFileTypes: DocumentFileTypes;
  PageUpdateManyWithNestedWhereInput: PageUpdateManyWithNestedWhereInput;
  _OrderDirection: _OrderDirection;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  Aggregate: ResolverTypeWrapper<Aggregate>;
  VersionWhereInput: VersionWhereInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  PageUpsertWithNestedWhereUniqueInput: PageUpsertWithNestedWhereUniqueInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DocumentVersion: ResolverTypeWrapper<DocumentVersion>;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  RGBAInput: RgbaInput;
  LocationInput: LocationInput;
  ImageResizeInput: ImageResizeInput;
  Locale: Locale;
  AssetTransformationInput: AssetTransformationInput;
  RGBAHue: ResolverTypeWrapper<Scalars['RGBAHue']>;
  Color: ResolverTypeWrapper<Color>;
  Location: ResolverTypeWrapper<Location>;
  UnpublishLocaleInput: UnpublishLocaleInput;
  DocumentOutputInput: DocumentOutputInput;
  AssetOrderByInput: AssetOrderByInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  PageOrderByInput: PageOrderByInput;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetUpdateInput: AssetUpdateInput;
  PageConnection: ResolverTypeWrapper<PageConnection>;
  PageUpdateInput: PageUpdateInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ImageFit: ImageFit;
  RGBA: ResolverTypeWrapper<Rgba>;
  _RelationInputKind: _RelationInputKind;
  AssetUpdateManyInput: AssetUpdateManyInput;
  Mutation: ResolverTypeWrapper<{}>;
  _MutationInputFieldKind: _MutationInputFieldKind;
  AssetWhereInput: AssetWhereInput;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  PageUpdateManyInput: PageUpdateManyInput;
  ColorInput: ColorInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: ResolverTypeWrapper<{}>;
  AssetConnection: ResolverTypeWrapper<AssetConnection>;
  PageWhereUniqueInput: PageWhereUniqueInput;
  PageUpsertInput: PageUpsertInput;
  DocumentTransformationInput: DocumentTransformationInput;
  ImageTransformationInput: ImageTransformationInput;
  AssetUpsertInput: AssetUpsertInput;
  Version: ResolverTypeWrapper<Version>;
  PageType: PageType;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  PageUpdateWithNestedWhereUniqueInput: PageUpdateWithNestedWhereUniqueInput;
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  _RelationInputCardinality: _RelationInputCardinality;
  Stage: Stage;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  PageEdge: PageEdge;
  String: Scalars['String'];
  PageManyWhereInput: PageManyWhereInput;
  ID: Scalars['ID'];
  Long: Scalars['Long'];
  RichTextAST: Scalars['RichTextAST'];
  Asset: Asset;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Page: Page;
  AssetEdge: AssetEdge;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  PageWhereInput: PageWhereInput;
  ConnectPositionInput: ConnectPositionInput;
  Hex: Scalars['Hex'];
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  PageCreateInput: PageCreateInput;
  RichText: RichText;
  RGBATransparency: Scalars['RGBATransparency'];
  Node: ResolversParentTypes['Asset'] | ResolversParentTypes['Page'];
  BatchPayload: BatchPayload;
  PageUpdateManyWithNestedWhereInput: PageUpdateManyWithNestedWhereInput;
  Json: Scalars['Json'];
  Aggregate: Aggregate;
  VersionWhereInput: VersionWhereInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  PageUpsertWithNestedWhereUniqueInput: PageUpsertWithNestedWhereUniqueInput;
  Date: Scalars['Date'];
  DocumentVersion: DocumentVersion;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  RGBAInput: RgbaInput;
  LocationInput: LocationInput;
  ImageResizeInput: ImageResizeInput;
  AssetTransformationInput: AssetTransformationInput;
  RGBAHue: Scalars['RGBAHue'];
  Color: Color;
  Location: Location;
  UnpublishLocaleInput: UnpublishLocaleInput;
  DocumentOutputInput: DocumentOutputInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetUpdateInput: AssetUpdateInput;
  PageConnection: PageConnection;
  PageUpdateInput: PageUpdateInput;
  DateTime: Scalars['DateTime'];
  RGBA: Rgba;
  AssetUpdateManyInput: AssetUpdateManyInput;
  Mutation: {};
  AssetWhereInput: AssetWhereInput;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  PageUpdateManyInput: PageUpdateManyInput;
  ColorInput: ColorInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: {};
  AssetConnection: AssetConnection;
  PageWhereUniqueInput: PageWhereUniqueInput;
  PageUpsertInput: PageUpsertInput;
  DocumentTransformationInput: DocumentTransformationInput;
  ImageTransformationInput: ImageTransformationInput;
  AssetUpsertInput: AssetUpsertInput;
  Version: Version;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  PageUpdateWithNestedWhereUniqueInput: PageUpdateWithNestedWhereUniqueInput;
  PageInfo: PageInfo;
};

export type PageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageEdge'] = ResolversParentTypes['PageEdge']> = {
  node?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface RichTextAstScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextAST'], any> {
  name: 'RichTextAST';
}

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<ReadonlyArray<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetLocalizationsArgs, 'locales' | 'includeCurrent'>>;
  documentInStages?: Resolver<ReadonlyArray<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetCreatedAtArgs, 'variation'>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetUpdatedAtArgs, 'variation'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AssetPublishedAtArgs, 'variation'>>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  history?: Resolver<ReadonlyArray<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<AssetHistoryArgs, 'limit' | 'skip'>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<AssetUrlArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<ReadonlyArray<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<PageDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fullSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PageType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  history?: Resolver<ReadonlyArray<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PageHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetEdge'] = ResolversParentTypes['AssetEdge']> = {
  node?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface HexScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hex'], any> {
  name: 'Hex';
}

export type RichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface RgbaTransparencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBATransparency'], any> {
  name: 'RGBATransparency';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Page', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DocumentVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentVersion'] = ResolversParentTypes['DocumentVersion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface RgbaHueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBAHue'], any> {
  name: 'RGBAHue';
}

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = {
  hex?: Resolver<ResolversTypes['Hex'], ParentType, ContextType>;
  rgba?: Resolver<ResolversTypes['RGBA'], ParentType, ContextType>;
  css?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<LocationDistanceArgs, 'from'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageConnection'] = ResolversParentTypes['PageConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['PageEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type RgbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['RGBA'] = ResolversParentTypes['RGBA']> = {
  r?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  g?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  a?: Resolver<ResolversTypes['RGBATransparency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'data'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'where' | 'data'>>;
  deleteAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'where'>>;
  upsertAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpsertAssetArgs, 'where' | 'upsert'>>;
  publishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationPublishAssetArgs, 'where' | 'publishBase' | 'to'>>;
  unpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUnpublishAssetArgs, 'where' | 'from' | 'unpublishBase'>>;
  updateManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsArgs, 'data'>>;
  deleteManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyAssetsArgs, never>>;
  publishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsArgs, 'to' | 'publishBase'>>;
  unpublishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsArgs, 'from' | 'unpublishBase'>>;
  createPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationCreatePageArgs, 'data'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationUpdatePageArgs, 'where' | 'data'>>;
  deletePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationDeletePageArgs, 'where'>>;
  upsertPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationUpsertPageArgs, 'where' | 'upsert'>>;
  publishPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationPublishPageArgs, 'where' | 'to'>>;
  unpublishPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationUnpublishPageArgs, 'where' | 'from'>>;
  updateManyPages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPagesArgs, 'data'>>;
  deleteManyPages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyPagesArgs, never>>;
  publishManyPages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPagesArgs, 'to'>>;
  unpublishManyPages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPagesArgs, 'from'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id' | 'stage' | 'locales'>>;
  assets?: Resolver<ReadonlyArray<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetsArgs, 'stage' | 'locales'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'where' | 'stage' | 'locales'>>;
  assetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<QueryAssetsConnectionArgs, 'stage' | 'locales'>>;
  assetVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryAssetVersionArgs, 'where'>>;
  pages?: Resolver<ReadonlyArray<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPagesArgs, 'stage'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'where' | 'stage'>>;
  pagesConnection?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<QueryPagesConnectionArgs, 'stage'>>;
  pageVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPageVersionArgs, 'where'>>;
};

export type AssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetConnection'] = ResolversParentTypes['AssetConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['AssetEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  PageEdge?: PageEdgeResolvers<ContextType>;
  Long?: GraphQLScalarType;
  RichTextAST?: GraphQLScalarType;
  Asset?: AssetResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  AssetEdge?: AssetEdgeResolvers<ContextType>;
  Hex?: GraphQLScalarType;
  RichText?: RichTextResolvers<ContextType>;
  RGBATransparency?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Aggregate?: AggregateResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DocumentVersion?: DocumentVersionResolvers<ContextType>;
  RGBAHue?: GraphQLScalarType;
  Color?: ColorResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  PageConnection?: PageConnectionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  RGBA?: RgbaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  AssetConnection?: AssetConnectionResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
