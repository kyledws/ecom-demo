import { useEffect } from "preact/hooks";

import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

type CounterState = {
  count: number;
  double: number;
};

const countAtom = atom({ default: 0, key: "count" });
const doubleSelector = selector({
  key: "double",
  get({ get }) {
    const count = get(countAtom);
    return count * 2;
  },
});

export const useCounter = (): CounterState => {
  const [count, setCount] = useRecoilState(countAtom);
  const double = useRecoilValue(doubleSelector);

  useEffect(() => {
    const interval = setInterval(setCount, 1000, (c: number) => c + 1);
    return () => void clearInterval(interval);
  });

  return {
    count,
    double,
  };
};
