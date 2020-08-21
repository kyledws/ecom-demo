import test, { ExecutionContext } from "ava";

import * as Test from "./storyblok-cache";

test("Tested.getKeyForFullSlug", (c: ExecutionContext) => {
  const expected = "storyblok_full_slug_mockFullSlug";
  const actual = Test.getKeyForFullSlug("mockFullSlug");
  c.deepEqual(actual, expected);
});

test("Tested.getKeyForId", (c: ExecutionContext) => {
  const expected = "storyblok_id_123";
  const actual = Test.getKeyForId(123);
  c.deepEqual(actual, expected);
});
