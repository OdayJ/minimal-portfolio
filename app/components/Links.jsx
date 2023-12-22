"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import React from "react";
import { styled } from "styled-components";
const Wrapper = styled.div`
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 140px;
  @media (min-width: 550px) {
    padding: 0px 40px;
  }
`;
const Bar = styled.div`
  height: 4px;
  width: 100px;
  background-color: #2f303a;
  @media (min-width: 550px) {
    width: 220px;
  }
  @media (min-width: 1100px) {
    width: 364px;
  }
`;

const Link = styled.a`
  all: unset;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export default function Links() {
  return (
    <Wrapper>
      <Bar />
      <Link href="https://www.linkedin.com/in/oday-jawaada/" target="_blank">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://github.com/OdayJ" target="_blank">
        <FaGithub size={24} />
      </Link>
      <Link href="https://twitter.com/OdayDev" target="_blank">
        <FaXTwitter size={24} />
      </Link>
    </Wrapper>
  );
}
