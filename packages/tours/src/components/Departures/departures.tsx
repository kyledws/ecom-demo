import { h } from "preact";
import { styled } from "linaria/react";

import { useDepartures } from "./hooks";

const Wrapper = styled.pre`
  color: teal;
`;

export const Departures = (): h.JSX.Element => {
  const { data, error, loading } = useDepartures();

  //@ts-ignore
  if (loading) return <Wrapper>Loading...</Wrapper>;

  //@ts-ignore
  if (error) return <Wrapper>Error! {error}</Wrapper>;

  //@ts-ignore
  return <Wrapper>{JSON.stringify(data, null, 4)}</Wrapper>;
};
