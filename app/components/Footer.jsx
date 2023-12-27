"use client";
import React from "react";
import { styled } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useSmoothScroll from "./useSmoothScroll";

const Container = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1100px) {
    gap: 64px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  p {
    font-family: var(--font-satoshi);
    font-weight: 500;
    opacity: 0.6;
    @media (min-width: 1100px) {
      &:first-of-type {
        font-size: 1.3rem;
      }
    }
  }
`;
const Link = styled.a`
  all: unset;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
const Links = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const Contact = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px;
  font-weight: 500;

  place-items: center;
  align-items: end;
  font-family: var(--font-satoshi);
  p {
    opacity: 0.6;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 180px;
    font-size: 1.1rem;
  }
`;

const Nav = styled.ul`
  all: unset;
  display: none;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  li {
    all: unset;
    cursor: pointer;
    font-family: var(font-satoshi);
    font-weight: 500;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  @media (min-width: 1100px) {
    display: flex;
  }
`;

export default function Footer() {
  const scrollToSection = useSmoothScroll();

  return (
    <Container id="Contact">
      <Wrapper>
        <p>Thanks for dropping by!</p>
        <Links>
          <Link
            href="https://www.linkedin.com/in/oday-jawaada/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com/OdayJ" target="_blank">
            <FaGithub size={24} />
          </Link>
          <Link href="https://twitter.com/OdayDev" target="_blank">
            <FaXTwitter size={24} />
          </Link>
        </Links>
      </Wrapper>
      <Contact>
        <p>Oday Jawaada</p>
        <Nav>
          <li onClick={() => scrollToSection("Image")}>About</li>
          <li onClick={() => scrollToSection("Skills")}>Skills</li>
          <li onClick={() => scrollToSection("Work")}>Work</li>
        </Nav>
        <p>
          Birmingham, <br />
          United Kingdom
        </p>
      </Contact>
    </Container>
  );
}
