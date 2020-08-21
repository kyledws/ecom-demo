import "reflect-metadata";

import test, { ExecutionContext } from "ava";

import { SbContent } from "local/repository";
import { WebpageContent } from "local/schema/webpage-content";
import { Website } from "../../type";
import * as Facade from "./facade";

test("Facade.sbContentToWebpageContent", async (c: ExecutionContext) => {
  const sbContent: SbContent = {
    body: { _uid: "mockUid", component: "mockComponent" },
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };

  const actual = Facade.sbContentToWebpageContent(sbContent);
  c.like(actual, {
    body: '{"_uid":"mockUid","component":"mockComponent"}',
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  });
});

test("Facade.webpageContentToToursLandingPage", async (c: ExecutionContext) => {
  const content: WebpageContent = {
    body: '{"_uid":"mockUid","component":"mockComponent"}',
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };
  const actual = Facade.webpageContentToToursLandingPage(content);
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
