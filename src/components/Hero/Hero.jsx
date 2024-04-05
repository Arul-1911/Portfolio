import React from "react";
import styles from "./hero.module.css";
import { imageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Hi, I'm Arul</h3>
        <p className={styles.description}>
         As a passionate MERN stack developer,
          I am excited to showcase my skills and projects to you
        </p>
        <a
          href="mailto:arulpraveen19112002@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
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
