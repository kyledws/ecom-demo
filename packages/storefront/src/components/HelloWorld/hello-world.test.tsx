import React from "react";
import { render } from "@testing-library/react";
import test, { ExecutionContext } from "ava";

import { HelloWorld } from "./hello-world";
import { scaffoldJsdom } from "local/utils/testing";

scaffoldJsdom(test);

test("HelloWorld", (c: ExecutionContext) => {
  const { container } = render(<HelloWorld />);
  const actual = container.innerHTML;
  const expected = "Hello World! 0";
  c.is(actual, expected);
});
