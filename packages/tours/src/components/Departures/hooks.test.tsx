import test, { ExecutionContext } from "ava";

import { scaffoldJsdom } from "local/utils/testing";

scaffoldJsdom(test);

test("useCounter", (c: ExecutionContext) => {
  const expected = "0";

  const actual = "0";

  c.is(actual, expected);
});
