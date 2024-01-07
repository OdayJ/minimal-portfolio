"use client";
import { MdOutlineSwipe } from "react-icons/md";
import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Timeline from "@/app/components/project/Timeline";
import Section from "@/app/components/project/Section";
import ImageSlider from "@/app/components/project/ImageSlider";
import Projects from "@/app/projects";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  max-width: 770px;
  width: 100%;
  display: grid;
  padding: 64px 24px;
  gap: 64px;
`;
const ImageWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  padding: 0px 24px;
  margin-top: 100px;
`;

const CoverImg = styled.div`
  border-radius: 12px;
`;
const Title = styled.h2`
  font-family: var(--font-cabinet);
  font-size: clamp(1.7rem, 5.6vw + 0.5rem, 2.1rem);
  font-weight: 800;
  @media (min-width: 550px) {
    font-size: clamp(2.1rem, 6.8vw - 0.25rem, 3rem);
  }
  @media (min-width: 1100px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  font-size: 1rem;
  font-family: var(--font-satoshi);
  opacity: 0.5;
  @media (min-width: 550px) {
    font-size: 1.2rem;
  }
`;

const PROJECTS = Projects;

export default function page({ params }) {
  const project = PROJECTS[params.id];
  return (
    <Container>
      <Nav />
      <ImageWrapper>
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
      </ImageWrapper>

      <Wrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Title>{params.id}</Title>
          <Desc>{project.desc}</Desc>
        </div>
        <Timeline
          title={params.id}
          link={project.link}
          timeline={project.timeline}
        />
        <Section title="Introduction">{project.introduction}</Section>
        <Section title="Problem">{project.problem}</Section>
        <Section title="Solution">{project.solution}</Section>
        <Section title="Image Gallery">
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "8px",
            }}
          >
            <p>Swipe to see more</p>
            <MdOutlineSwipe />
          </div>

          <ImageSlider color="#91a8cf" images={project.images}></ImageSlider>
        </Section>
        <Section title="Reflection">{project.reflection}</Section>
      </Wrapper>
      <Footer />
    </Container>
  );
}
