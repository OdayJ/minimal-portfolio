import styles from "./page.module.css";
import Skills from "./components/Skills";
import About from "./components/About";
import HeroImage from "./components/HeroImage";
import Intro from "./components/Intro";
import Links from "./components/Links";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Links />
      <Intro />
      <HeroImage />
      <About />
      <Skills />
      <Work />
      <Footer />
    </main>
  );
}
