/* eslint-disable ava/use-test */
import { JSDOM } from "jsdom";
import { TestInterface } from "ava";

export const scaffoldJsdom = <T>(test: TestInterface<T>): void => {
  test.beforeEach(() => {
    globalThis.window = (new JSDOM().window as unknown) as Window & typeof globalThis;
    globalThis.document = globalThis.window.document;
  });
};
