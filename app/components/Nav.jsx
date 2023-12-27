"use client";
import React from "react";
import { styled } from "styled-components";
import useSmoothScroll from "./useSmoothScroll";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const LinksList = styled.ul`
  font-family: var(--font-satoshi);
  list-style-type: none;
  display: none;
  padding: 0;
  gap: 8px;
  justify-content: space-around;
  align-items: center;
  width: 380px;
  height: 45px;
  background-color: rgba(179, 179, 179, 0.1);
  backdrop-filter: blur(18px);
  border-radius: 10px;

  @media (min-width: 1100px) {
    display: flex;
  }
`;
const Link = styled.li`
  user-select: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  opacity: 1;
  padding: 4px 12px;
  border-radius: 8px;
  color: #2f303a;
  height: fit-content;
  font-size: 14px;

  &:hover {
    background-color: #fff;
  }
`;

const Wrapper = styled.div`
  max-width: 1160px;
  width: 100%;
  position: fixed;
  top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  @media (min-width: 550px) {
    padding: 0px 40px;
  }
  @media (min-width: 1100px) {
    padding: 0px;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-size: 1.5rem;
    font-family: var(--font-satoshi);
  }
`;
export default function Nav() {
  const scrollToSection = useSmoothScroll();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname === "/") {
      setTimeout(() => scrollToSection(), 0);
    } else {
      router.push("/");
    }
  };
  return (
    <Wrapper>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        O
      </button>
      {pathname === "/" && (
        <LinksList>
          <Link onClick={() => scrollToSection("Image")}>About</Link>
          <Link onClick={() => scrollToSection("Skills")}>Skills</Link>
          <Link onClick={() => scrollToSection("Work")}>Work</Link>
          <Link onClick={() => scrollToSection("Contact")}>Contact</Link>
        </LinksList>
      )}
    </Wrapper>
  );
}
