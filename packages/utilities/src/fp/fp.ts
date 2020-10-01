import { Err, None, Ok, Option, Result, Some } from "monads";

export const equals = <T>(first: T): ((second: T) => boolean) => (second: T): boolean =>
  first === second;

type Matcher<V, R> = [(needle: V) => boolean, () => R];

const MATCHER_INDEX = 1;

export const match = <V, R>(needle: V, matchers: Matcher<V, R>[]): Option<R> => {
  const matcher = matchers.find(([matcher]) => matcher(needle));
  if (matcher) {
    return Some(matcher[MATCHER_INDEX]());
  }

  const defaultMatcher = matchers.find(([matcher]) => matcher === null);
  if (defaultMatcher) {
    return Some(defaultMatcher[MATCHER_INDEX]());
  }

  return None;
};

export const self = <T>(s: T): (() => T) => () => s;

export type TryErr<T = unknown> = {
  innerError?: T;
  message: string;
};

export type TryResult<R, E = unknown> = Result<R, TryErr<E>>;

export const tryResult = <
  T extends (...args: unknown[]) => R | null,
  R,
  C extends (e: E) => TryErr<TE>,
  E = unknown,
  TE = unknown
>(
  tryFunction: T,
  catchFunction: C
): TryResult<R, TE> => {
  try {
    const result = tryFunction();
    return result === null ? Err({ message: "Null result" }) : Ok(result);
  } catch (e) {
    return Err(catchFunction.call(null, e));
  }
};

export const tryResultAsync = async <
  T extends (...args: unknown[]) => Promise<R | null>,
  R,
  C extends (e: E) => TryErr<TE>,
  E = unknown,
  TE = unknown
>(
  tryFunction: T,
  catchFunction: C
): Promise<TryResult<R, TE>> => {
  try {
    const result = await tryFunction();
    return result === null ? Err({ message: "Null result" }) : Ok(result);
  } catch (e) {
    return Err(catchFunction.call(null, e));
  }
};

export const tryOption = <
  T extends (...args: unknown[]) => R | null,
  R,
  C extends (e: E) => void,
  E = unknown
>(
  tryFunction: T,
  catchFunction?: C
): Option<R> => {
  try {
    const result = tryFunction();
    return result === null ? None : Some(result);
  } catch (e) {
    catchFunction?.call(null, e);
    return None;
  }
};

export const tryOptionAsync = async <
  T extends (...args: unknown[]) => Promise<R | null>,
  R,
  C extends (e: E) => void,
  E = unknown
>(
  tryFunction: T,
  catchFunction?: C
): Promise<Option<R>> => {
  try {
    const result = await tryFunction();
    return result === null ? None : Some(result);
  } catch (e) {
    catchFunction?.call(null, e);
    return None;
  }
};
