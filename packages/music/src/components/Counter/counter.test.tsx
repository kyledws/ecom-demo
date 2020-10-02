import { h } from "preact";
import { mock } from "sinon";
import { render } from "@testing-library/preact";

import { scaffoldJsdom } from "local/utils/testing";

import { Counter } from "./counter.view";
import * as hook from "./counter.hook";

import test, { ExecutionContext } from "ava";

scaffoldJsdom(test);

test("Counter", async (c: ExecutionContext) => {
  mock(hook).expects("useCounter").returns({
    count: 4,
    double: 8,
  });

  const counter = render(<Counter />);
  const wrapper = counter.getByTestId("wrapper");
  c.is(wrapper.innerHTML, "Count: 4, Double: 8");
});
