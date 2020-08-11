import React from "react";
import { render } from "@testing-library/react";
import test, { ExecutionContext } from "ava";

import { scaffoldJsdom } from "local/utils/testing";
import { useCounter } from "./hooks";

const UseCounter = (): React.ReactElement => {
  return <>{useCounter()}</>;
};

scaffoldJsdom(test);

test("useCounter", (c: ExecutionContext) => {
  const expected = "0";

  const { container } = render(<UseCounter />);
  const actual = container.innerHTML;

  c.is(actual, expected);
});
