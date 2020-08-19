import { Maybe } from "purify-ts";
import StoryblokClient from "storyblok-js-client";

import { Memcache, SbContent, Storyblok } from "local/repository";
import { ToursLandingPage } from "./type";
import { Website } from "../../type";
import { WebpageContent } from "local/schema/webpage-content";

type GetToursLandingPage = {
  fullSlug: string;
  sbCache: Memcache.Client;
  sbClient: StoryblokClient;
  site: Website;
};

export const getToursLandingPage = async (
  args: GetToursLandingPage
): Promise<Maybe<ToursLandingPage>> => {
  return (
    await Storyblok.getContentByFullSlug(args.fullSlug, args.sbClient, args.sbCache)
  )
    .map(sbContentToWebpageContent)
    .map(webpageContentToToursLandingPage);
};

export const sbContentToWebpageContent = (sb: SbContent): WebpageContent => {
  return new WebpageContent({
    body: JSON.stringify(sb.body),
    fullSlug: sb.fullSlug,
    id: sb.id,
    type: sb.type,
  });
};

export const webpageContentToToursLandingPage = (content: WebpageContent) => {
  return new ToursLandingPage({ content: [content] });
};
