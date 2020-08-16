import { Maybe } from "purify-ts";

export const equals = <T>(first: T): ((second: T) => boolean) => (second: T): boolean =>
  first === second;

type Matcher<V, R> = [(needle: V) => boolean, () => R];

const MATCHER_INDEX = 1;

export const match = <V, R>(needle: V, matchers: Matcher<V, R>[]): Maybe<R> => {
  const matcher = matchers.find(([matcher]) => matcher(needle));
  if (matcher) {
    return Maybe.of(matcher[MATCHER_INDEX]());
  }

  const defaultMatcher = matchers.find(([matcher]) => matcher === null);
  if (defaultMatcher) {
    return Maybe.of(defaultMatcher[MATCHER_INDEX]());
  }

  return Maybe.empty();
};

export const self = <T>(s: T): (() => T) => () => s;

export const tryMaybe = <
  T extends (...args: unknown[]) => R | null,
  R,
  // eslint-disable-next-line functional/no-return-void
  C extends (e: E) => void,
  E = unknown
>(
  tryFunction: T,
  catchFunction?: C
): Maybe<R> => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    const result = tryFunction();
    return result === null ? Maybe.empty() : Maybe.of(result);
  } catch (e) {
    catchFunction?.call(null, e);
    return Maybe.empty();
  }
};

export const tryMaybeAsync = async <
  T extends (...args: unknown[]) => Promise<R | null>,
  R,
  // eslint-disable-next-line functional/no-return-void
  C extends (e: E) => void,
  E = unknown
>(
  tryFunction: T,
  catchFunction?: C
): Promise<Maybe<R>> => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    const result = await tryFunction();
    return result === null ? Maybe.empty() : Maybe.of(result);
  } catch (e) {
    catchFunction?.call(null, e);
    return Maybe.empty();
  }
};
