"use client";
import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Timeline from "@/app/components/project/Timeline";

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  padding: 0px 24px;
`;

const CoverImg = styled.div`
  border-radius: 12px;
`;
const Title = styled.h2`
  font-family: var(--font-cabinet);
  font-size: clamp(1.7rem, 5.6vw + 0.5rem, 2.5rem);
  font-weight: 800;
  @media (min-width: 550px) {
    font-size: clamp(2.1rem, 6.8vw - 0.25rem, 4.4rem);
  }
  @media (min-width: 1100px) {
    font-size: 72px;
  }
`;
const Desc = styled.p`
  font-family: var(--font-satoshi);
  opacity: 0.5;
`;

const PROJECTS = {
  Wedo: {
    cover: "/Wedo/WedoCover-min.jpg",
    desc: "A collaborative to-do list for teams built in NextJS and MongoDB",
    link: "https://github.com/OdayJ/Wedo",
    timeline: "AUG 20223 - SEP 2023",
  },
  Dabfoods: {
    cover: "/Dabfoods/DabfoodsCover.webp",
    desc: "A collaborative to-do list for teams built in NextJS and MongoDB",
    link: "https://github.com/OdayJ/Wedo",
    timeline: "AUG 20223 - SEP 2023",
  },
};

export default function page({ params }) {
  const project = PROJECTS[params.id];
  return (
    <Container>
      <Wrapper>
        <CoverImg>
          <Image
            src={project.cover}
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
        </CoverImg>
        <Title>{params.id}</Title>
        <Desc>{project.desc}</Desc>
        <Timeline
          title={params.id}
          link={project.link}
          timeline={project.timeline}
        />
      </Wrapper>
    </Container>
  );
}
