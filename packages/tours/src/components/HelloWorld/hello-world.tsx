import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

import { useCounter } from "./hooks";

const Wrapper = styled.div`
  color: blue;
`;

export const HelloWorld = (): React.ReactElement => {
  const count = useCounter();

  const { loading, error, data } = useQuery(gql`
    query {
      page(fullSlug: "home") {
        type
      }
    }
  `);

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (error) return <Wrapper>Error! {error.message}</Wrapper>;

  return (
    <Wrapper>
      Hello World! {count}, {data.page.type}
    </Wrapper>
  );
};
