import { useEffect, useState } from "react";

const INCREMENT = 1;
const INITIAL_COUNT = 0;
const INTERVAL = 1000;

export const useCounter = (): number => {
  const [count, setCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    const interval = setInterval(setCount, INTERVAL, (c: number) => c + INCREMENT);
    return () => clearInterval(interval);
  });

  return count;
};
