"use client";
import { styled } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.p`
  font-family: var(--font-cabinet);
  font-weight: 777;
  font-size: 2rem;
`;
const Desc = styled.p`
  font-family: var(--font-satoshi);
  opacity: 0.8;
  @media (min-width: 550px) {
    font-size: 1.2rem;
  }
`;
export default function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{children}</Desc>
    </Wrapper>
  );
}
