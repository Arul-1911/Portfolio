import React from "react";
import styles from "./about.module.css";
import { imageUrl } from "../../utils";

function About() {
  return (
    <section className={styles.container} id="about" data-aos="zoom-in">
      <h2 className={styles.title} data-aos="zoom-in">
        About
      </h2>
      <div className={styles.content}>
        <img
          src={imageUrl("about/about-image.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          data-aos="zoom-in"
        />
        <ul className={styles.aboutItems} data-aos="zoom-in">
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in crafting responsive,
                accessible and performance-driven websites that provide an
                exceptional user experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I possess expertise in designing and developing efficient and
                scalable back-end systems and RESTful APIs, utilizing best
                practices to ensure high performance and reliability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                specialize in both front-end and back-end development, with a
                strong understanding of the entire web development process.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
