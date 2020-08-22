import "reflect-metadata";

import test, { ExecutionContext } from "ava";

import { Storyblok } from "local/repository";
import { WebpageContent } from "local/schema/webpage-content";
import { Website } from "../../type";
import * as Test from "./facade";

test("sbContentToWebpageContent", async (c: ExecutionContext) => {
  const sbContent: Storyblok.SbContent = {
    body: { _uid: "mockUid", component: "mockComponent" },
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };

  const actual = Test.sbContentToWebpageContent(sbContent);
  c.like(actual, {
    body: '{"_uid":"mockUid","component":"mockComponent"}',
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  });
});

test("webpageContentToToursLandingPage", async (c: ExecutionContext) => {
  const content: WebpageContent = {
    body: '{"_uid":"mockUid","component":"mockComponent"}',
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };
  const actual = Test.webpageContentToToursLandingPage(content);
  c.like(actual, {
    content: [
      {
        body: '{"_uid":"mockUid","component":"mockComponent"}',
        fullSlug: "fullSlug",
        id: 10,
        type: "type",
      },
    ],
    site: Website.TOURS,
    type: "LandingPage",
  });
});
