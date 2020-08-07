declare namespace NodeJS {
  // eslint-disable-next-line functional/prefer-type-literal
  interface ProcessEnv {
    readonly WEBPACK_BUNDLE_SERVER: string;
  }
}

export {};
