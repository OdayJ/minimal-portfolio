"use client";
import React from "react";
import { styled } from "styled-components";
import { RxOpenInNewWindow } from "react-icons/rx";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  border: solid;
  border-width: 2px 0px;
  border-color: #ecedf0;
  padding: 24px 0px;
  @media (min-width: 550px) {
    flex-direction: row;
    gap: 0px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: var(--font-satoshi);
  gap: 0.5rem;
  h3 {
    opacity: 0.5;
    font-weight: 400;
    font-size: 1rem;
  }
  p {
    font-weight: 800;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;

  align-items: center;
  cursor: pointer;
  font-weight: 800;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
export default function Timeline({ title, timeline, link }) {
  return (
    <Wrapper>
      <Info>
        <h3>TIMELINE</h3>
        <p>{timeline}</p>
      </Info>
      <Info>
        <h3>LINK</h3>
        <Link href={link} target="_blank">
          <p>OdayJ/{title}</p>
          <RxOpenInNewWindow />
        </Link>
      </Info>
    </Wrapper>
  );
}
