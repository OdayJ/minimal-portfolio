"use client";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 300px;
  padding: 0px 24px;
  @media (min-width: 550px) {
    padding: 0px 40px;
  }
  @media (min-width: 1100px) {
    height: 550px;
    padding: 0px;
  }
`;
export default function HeroImage() {
  return (
    <Wrapper id="Image">
      <Image
        src="/test.png"
        alt="img"
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Wrapper>
  );
}
