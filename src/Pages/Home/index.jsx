import styles from "./styles.module.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import InfoSection from "../../components/InfoSection";
import Footer from "../../components/Footer";

import Img_1 from "../../assets/Img_1.png";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.content}>
        <Hero imgLink={Img_1} />
        <InfoSection />
      </div>
      <Footer />
    </div>
  );
}
