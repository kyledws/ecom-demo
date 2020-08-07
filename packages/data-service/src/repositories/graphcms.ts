import { GraphQLClient } from "graphql-request";
import { Maybe } from "purify-ts";

import { tryMaybeAsync } from "@package/utilities";

import { Page, Query, QueryPageArgs } from "local/generated/graphcms";

type Variables = {
  readonly [key: string]: unknown;
};

const FIRST_RESULT = 0;

const GCMS_ENDPOINT =
  "https://api-us-east-1.graphcms.com/v2/ckdd3q8mef43501xn9rq486qa/master";

// eslint-disable-next-line functional/no-let
let gcmsClient: GraphQLClient;

const getGcmsClient = (): GraphQLClient => {
  if (!gcmsClient) {
    gcmsClient = new GraphQLClient(GCMS_ENDPOINT, {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
    });
  }
  return gcmsClient;
};

const queryGcms = <T>(query: string, variables?: Variables): Promise<Maybe<T>> => {
  return tryMaybeAsync(
    () => {
      const client = getGcmsClient();
      return client.request<T>(query, variables);
    },
    (e: unknown) => console.log("CMS.queryGcms", e)
  );
};

export const getPage = async (fullSlug: string): Promise<Maybe<Page>> => {
  const query = `
    query ($where: PageWhereInput) {
      pages(where: $where) {
        title
        type
      }
    }
  `;
  const args: QueryPageArgs = { where: { fullSlug } };
  const result = await queryGcms<Query>(query, args);
  if (result.isNothing()) {
    return Maybe.empty();
  }
  const { pages } = result.unsafeCoerce();
  return pages.length ? Maybe.of(pages[FIRST_RESULT]) : Maybe.empty();
};
