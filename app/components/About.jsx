"use client";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  font-family: var(--font-satoshi);
  max-width: 1100px;
  display: grid;
  gap: 32px;
  padding: 32px 24px 52px 24px;
  p {
    opacity: 0.8;
  }
  @media (min-width: 550px) {
    padding: 40px 40px 52px 40px;
  }
  @media (min-width: 1100px) {
    padding: 40px 0px 64px 0px;
    grid-template-columns: 1fr 1fr;
    gap: 32px 128px;
    font-size: 1.1rem;
  }
`;

export default function About() {
  return (
    <Wrapper id="About">
      <p>
        I’m a recent computer science graduate from the University of
        Birmingham.
      </p>
      <p>
        As I’ve grown as a developer, I’ve worked alongside senior designers and
        developers who had raised my standards to what to expect from a web
        application.
      </p>
      <p>
        Through these experiences, I've had the opportunity to create memorable
        products that are not only enjoyable to use. but are written in code
        thats maintainable and easy to understand.
      </p>
    </Wrapper>
  );
}
