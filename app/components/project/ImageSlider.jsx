"use client";
import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 28px;

  max-width: 24rem;
  @media (min-width: 550px) {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled(motion.div)`
  padding: 5px 20px;
  min-width: 390px;
  @media (min-width: 550px) {
    padding: 5px 30px;
    min-width: 100%;
  }
  @media (min-width: 1024px) {
    padding: 5px 40px;
    min-width: 100%;
  }
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
  border-radius: 1.5rem;
  pointer-events: none;
  box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.2);
`;

export default function ImageSlider({ color, images }) {
  const [width, setWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(0); // motion value for x-translation
  const carousel = React.useRef();
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  React.useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    const unsubscribeX = x.on("change", (latestX) => {
      // Calculate the percentage and clamp it between 0 and 100
      const percentage = clamp((-latestX / width) * 100, 0, 100);
      setCurrentX(percentage);
    });

    return () => {
      unsubscribeX();
    };
  }, [x, width]);

  return (
    <Wrapper>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab", overflow: "hidden" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x, display: "flex" }} // bind the motion value to the x style property
        >
          {images.map((image) => {
            return (
              <ImageWrapper key={image}>
                <Img src={image} alt="" sizes="100vw" width={0} height={0} />
              </ImageWrapper>
            );
          })}
        </motion.div>
      </motion.div>
      <div
        className="lg:ml-[40px]"
        style={{
          marginLeft: "20px",
          width: "90%",
          height: "2px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        {/* Filled Portion of the Progress Bar */}
        <div
          style={{
            width: `${currentX.toFixed(2)}%`,
            backgroundColor: color,
            height: "2px",
            borderRadius: "4px",
          }}
        />
      </div>
    </Wrapper>
  );
}
