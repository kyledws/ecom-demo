import StoryblokClient from "storyblok-js-client";

import { Either } from "@package/utilities";

import { Memcache, Storyblok } from "local/repository";
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
): Promise<Either<ToursLandingPage>> => {
  return (await Storyblok.cache.getContentByFullSlug(args.fullSlug, args.sbCache))
    .alt(await Storyblok.getContentByFullSlug(args.fullSlug, args.sbClient))
    .map(sbContentToWebpageContent)
    .map(webpageContentToToursLandingPage);
};

export const sbContentToWebpageContent = (sb: Storyblok.SbContent): WebpageContent => {
  return new WebpageContent({
    body: JSON.stringify(sb.body),
    fullSlug: sb.fullSlug,
    id: sb.id,
    type: sb.type,
  });
};

export const webpageContentToToursLandingPage = (
  content: WebpageContent
): ToursLandingPage => {
  return new ToursLandingPage({ content: [content] });
};
