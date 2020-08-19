import "reflect-metadata";

import test, { ExecutionContext } from "ava";

import { SbContent } from "local/repository";
import { Website } from "../../type";
import * as Facade from "./facade";

test("Facade.sbContentToWebpageContent", async (c: ExecutionContext) => {
  const sbContent: SbContent = {
    body: [],
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };

  const actual = Facade.sbContentToWebpageContent(sbContent);
  c.like(actual, {
    body: "[]",
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  });
});

test("Facade.webpageContentToToursLandingPage", async (c: ExecutionContext) => {
  const content = {
    body: "[]",
    fullSlug: "fullSlug",
    id: 10,
    type: "type",
  };
  const actual = Facade.webpageContentToToursLandingPage(content);
  c.like(actual, {
    content: [
      {
        body: "[]",
        fullSlug: "fullSlug",
        id: 10,
        type: "type",
      },
    ],
    site: Website.TOURS,
    type: "LandingPage",
  });
});
