import React from "react";
import styled from "styled-components";

import { useDepartures } from "./hooks";

const Wrapper = styled.pre`
  color: red;
`;

export const Departures = (): React.ReactElement => {
  const { data, error, loading } = useDepartures();

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (error) return <Wrapper>Error! {error.message}</Wrapper>;

  return <Wrapper>{JSON.stringify(data, null, 2)}</Wrapper>;
};
