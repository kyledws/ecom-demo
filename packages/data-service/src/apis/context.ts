type User = {
  readonly name: string;
};

export type ResolverContext = {
  readonly user?: User;
};
