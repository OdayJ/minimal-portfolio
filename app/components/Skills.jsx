"use client";
import React from "react";
import styled from "styled-components";
import { TbDiamondsFilled } from "react-icons/tb";

const Stretched = styled.div`
  padding: 52px 24px;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: hsl(228, 29%, 97%);
  @media (min-width: 550px) {
    padding: 52px 40px;
  }
  @media (min-width: 1100px) {
    padding: 36px 0px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
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
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Skill = styled.div`
  font-family: var(--font-satoshi);
  display: flex;
  width: 50%;
  align-items: center;
  gap: 8px;
  @media (min-width: 550px) {
    width: 33.3%;
  }
  @media (min-width: 1100px) {
    width: 25%;
  }
`;
const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 0px;
`;

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "NextJS",
    "ThreeJS",
    "Tailwind",
    "MongoDB",
  ];
  return (
    <Stretched>
      <Wrapper>
        <Title>My Skills</Title>
        <Desc>
          Apart from the courses included in my degree, I've taken a number of
          online courses such as{" "}
          <Bold>CSS for JS developers, The Joy of React,</Bold> and I'm
          currently taking <Bold>ThreeJS Journey.</Bold>
        </Desc>
        <SkillWrapper>
          {skills.map((skill) => (
            <Skill key={skill}>
              <TbDiamondsFilled color="#3E4668" /> <p>{skill}</p>
            </Skill>
          ))}
        </SkillWrapper>
      </Wrapper>
    </Stretched>
  );
}
