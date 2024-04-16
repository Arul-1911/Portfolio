import React from "react";
import styles from "./about.module.css";
import { imageUrl } from "../../utils";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={imageUrl("about/about-image.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          data-aos="fade-right"
        />
        <ul className={styles.aboutItems} data-aos="fade-left">
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={imageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I have worked both Front-end and Backe-end at a Sametime as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
