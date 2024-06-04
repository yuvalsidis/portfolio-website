// MainSection.js
import React from 'react';
import styles from '../styles/mainsection.module.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function MainSection() {
  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroText}>
                <h1>Fullstack React Developer 👋🏻</h1>
                <p> Hi, i am yuval sidis. A passionate Fullstack and React Developer based in israel. 📍</p>
                <div className={styles.heroLinks}>
                  <a href='https://www.linkedin.com/in/yuval-sidis-7789122a0/'><LinkedInIcon/></a>
                  <a href='https://github.com/yuvalsidis'><GitHubIcon /></a>
                </div>
              </div>
              <div className={styles.heroImg}></div>
            </div>
            <div className={styles.skills}>
              <p>Tech stack</p>
              <ul>
                <li>
                  <img src='https://skillicons.dev/icons?i=html'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=css'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=js'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=ts'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=react'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=next'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=sass'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=vite'></img>
                </li>
                <li>
                <img src='https://skillicons.dev/icons?i=nodejs'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=npm'></img>
                </li>
                <li>
                  <img src='https://skillicons.dev/icons?i=git'></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>ABOUT ME</h2>
        <h1>Fullstack Developer Based in Israel 📍</h1>
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
    </>
  );
}

export default MainSection;
