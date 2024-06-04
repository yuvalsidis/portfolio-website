// MainSection.js
import React from 'react';
import styles from '../styles/mainsection.module.scss'

function MainSection() {
  return (
    <main>
      <section id="home" className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroText}>
                <h1>Front-End React Developer 👋🏻</h1>
                <p> Hi, i am yuval sidis. A passionate Front-End and React Developer based in israel. 📍  </p>
              </div>
              <div className={styles.heroImg}></div>
            </div>
            <div className={styles.skills}>
              <p>react</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>ABOUT ME</h2>
        <h1>Frontend Developer Based in Israel 📍</h1>
        <p>Hey there, I'm Yuval Sidis, a Frontend Developer with a passion for crafting beautiful,
          clean websites. My main focus is on frontend development,
          where I specialize in creating seamless user experiences and captivating interfaces.
        </p>
        <p>
          My stack primarily revolves around React/Next.js for frontend development,
          where I dedicate myself to delivering high-quality solutions that exceed
          user expectations while meeting technical requirements.
        </p>
      </section>
      <section id="projects">
        <h1>Projects Section</h1>
        <p> New projects coming soon.. 🤠 </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <h1>Don't be shy! Hit me up! 👇</h1>
        <div>
          <p>Location</p>
          <p>Israel</p>
        </div>
        <div>
          <p>Mail</p>
          <p>yuvalsidis@gmail.com</p>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
