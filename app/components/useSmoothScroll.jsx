import { animate } from "framer-motion";

const useSmoothScroll = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const top = element.offsetTop;
      animate(window.scrollY, top, {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
      });
    } else {
      // If the element doesn't exist, scroll to the top of the page
      animate(window.scrollY, 0, {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
      });
    }
  };

  return scrollToSection;
};

export default useSmoothScroll;
