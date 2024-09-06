import React from "react";
import styles from "./hero.module.css";
import { imageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title} data-aos="flip-down">
          I'm ArulPraveen
        </h3>
        <p className={styles.description}>
          As a passionate MERN stack developer, I am excited to showcase my
          skills and projects to you
        </p>
        <a
          href="https://drive.google.com/file/d/1XMwpRJ1KM-gAG_xfTjW4SDZTl9pWCwvv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src={imageUrl("hero/hero-boy-image.jpg")}
        alt=""
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
