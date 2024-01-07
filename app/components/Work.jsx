"use client";
import React from "react";
import { styled } from "styled-components";
import WorkCard from "./WorkCard";

const Wrapper = styled.div`
  font-family: var(--font-satoshi);
  width: 100%;
  max-width: 1100px;
  padding: 32px 24px 52px 24px;
  @media (min-width: 550px) {
    padding: 40px 40px 52px 40px;
  }
  @media (min-width: 1100px) {
    padding: 64px 0px 64px 0px;
  }
`;

const Title = styled.h2`
  font-family: var(--font-cabinet);
  font-size: min(32px, 2rem);
  font-weight: bold;
`;

const Desc = styled.p`
  font-family: var(--font-satoshi);
  opacity: 0.8;
  padding: 1rem 0 2.5rem 0;
  @media (min-width: 1100px) {
    max-width: 65%;
    font-size: 1.1rem;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 32px;
  @media (min-width: 1100px) {
    gap: 32px 128px;
    grid-template-columns: 1fr 1fr;
  }
`;
export default function Work() {
  return (
    <Wrapper id="Work">
      <Title>My Work</Title>
      <Desc>
        Take a look at some of the projects that I've recently worked on.
      </Desc>
      <CardWrapper>
        <WorkCard title="Wedo" src="/Wedo/WedoCover-min.jpg">
          A collaborative to-do list for teams built in NextJS and MongoDB
        </WorkCard>
        <WorkCard title="Dabfoods" src="/Dabfoods/DabfoodsCover.webp">
          A Landing page for a food wholesale startup in React and Sanity
        </WorkCard>
      </CardWrapper>
    </Wrapper>
  );
}
