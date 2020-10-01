import { Ok } from "monads";
import StoryblokClient from "storyblok-js-client";

import { TryResult } from "@package/utilities";

import { Memcache, Storyblok } from "local/repository";
import { MusicLandingPage } from "./type";
import { Website } from "../../type";
import { WebpageContent } from "local/schema/webpage-content";

type GetMusicLandingPage = {
  fullSlug: string;
  sbCache: Memcache.Client;
  sbClient: StoryblokClient;
  site: Website;
};

export const getMusicLandingPage = async (
  args: GetMusicLandingPage
): Promise<TryResult<MusicLandingPage>> => {
  const tr = await Storyblok.cache.getContentByFullSlug(args.fullSlug, args.sbCache);

  return (tr.isOk()
    ? tr
    : await Storyblok.getContentByFullSlug(args.fullSlug, args.sbClient)
  )
    .map(sbContentToWebpageContent)
    .map(webpageContentToMusicLandingPage);
};

export const sbContentToWebpageContent = (sb: Storyblok.SbContent): WebpageContent => {
  return new WebpageContent({
    body: JSON.stringify(sb.body),
    fullSlug: sb.fullSlug,
    id: sb.id,
    type: sb.type,
  });
};

export const webpageContentToMusicLandingPage = (
  content: WebpageContent
): MusicLandingPage => {
  return new MusicLandingPage({ content: [content] });
};
