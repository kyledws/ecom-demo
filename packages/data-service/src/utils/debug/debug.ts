import * as Env from "local/env";

export const trace = <T>(thing: T): T => {
  if (Env.DEBUG_TRACING) {
    console.log(thing);
  }
  return thing;
};
