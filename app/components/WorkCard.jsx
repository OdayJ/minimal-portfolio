"use client";
import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    font-family: var(--font-cabinet);
    font-size: min(32px, 2rem);
    font-weight: bold;
  }
  p {
    font-family: var(--font-satoshi);
    opacity: 0.8;
  }
`;
const Button = styled.a`
  font-family: var(--font-satoshi);
  font-weight: 700;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 265px;
  border-radius: 12px;
  overflow: hidden;
  @media (min-width: 1100px) {
    img {
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      transition: all 0.2s ease;
      vertical-align: middle;
      &:hover {
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -moz-transform: scale(1.5); /* Firefox */
        -ms-transform: scale(1.5); /* IE 9 */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.1);
      }
    }
  }
`;
export default function WorkCard({ title, src, children }) {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image
          src={src}
          alt="img"
          sizes="100vw"
          width={0}
          height={0}
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImgWrapper>

      <Title>
        <h2>{title}</h2>
        <p>{children}</p>
      </Title>
      <Button>View Project</Button>
    </Wrapper>
  );
}
