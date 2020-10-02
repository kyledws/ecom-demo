import { h } from "preact";

import { useCounter } from "./counter.hook";

export const Counter = (): h.JSX.Element => {
  const state = useCounter();

  return (
    <div data-testid="wrapper">
      Count: {state.count}, Double: {state.double}
    </div>
  );
};
