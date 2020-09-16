import test, { ExecutionContext } from "ava";

import { scaffoldJsdom } from "local/utils/testing";

scaffoldJsdom(test);

test("HelloWorld", (c: ExecutionContext) => {
  const actual = "Hello";
  const expected = "Hello World! 0";
  c.is(actual, expected);
});
