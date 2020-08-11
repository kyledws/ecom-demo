import test, { ExecutionContext } from "ava";

import { getPage } from "./page";

test("GetPage", async (c: ExecutionContext) => {
  const actual = await getPage({
    app: "tours",
    context: {},
    title: "title",
    type: "home",
  });
  c.is(actual.isJust(), true);
  c.is(actual.extract(), "");
});
