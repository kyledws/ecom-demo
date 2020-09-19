import React from "react";
import { styled } from "linaria/react";

import { useDepartures } from "./hooks";

const Wrapper = styled.pre`
  color: orange;
`;

export const Departures = (): React.ReactElement => {
  const { data, error, loading } = useDepartures();

  console.log("assadfdf");

  //@ts-ignore
  if (loading) return <Wrapper>Loading...</Wrapper>;

  //@ts-ignore
  if (error) return <Wrapper>Error! {error}</Wrapper>;

  //@ts-ignore
  return <Wrapper>{JSON.stringify(data, null, 4)}</Wrapper>;
};
