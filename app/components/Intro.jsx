"use client";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  display: grid;
  padding: 32px 24px 72px 24px;

  p {
    font-size: clamp(1.7rem, 5.6vw + 0.5rem, 2.5rem);
    font-family: var(--font-cabinet);
  }
  span {
    color: #91a8cf;
  }
  @media (min-width: 550px) {
    padding: 48px 110px 72px;
    p {
      font-size: clamp(2.1rem, 6.8vw - 0.25rem, 4.4rem);
    }
  }
  @media (min-width: 1100px) {
    max-width: 790px;
    padding: 48px 0px 120px;
    p {
      font-size: 72px;
    }
  }
`;

export default function Intro() {
  return (
    <Wrapper id="Hero">
      <p>Hi there, I'm Oday.</p>
      <p>
        A Front-End <span>Developer</span>,
      </p>
      <p>Learner and Minimalist.</p>
    </Wrapper>
  );
}
