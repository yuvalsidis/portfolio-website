  // MainSection.jsx
  import React from 'react';
  import styles from './styles/MainSection.module.scss';

  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
  import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
  import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
  import Image from 'next/image';
  import EmailLink from './EmailLink'
  import ProjectSection from './ProjectSection';


  function MainSection() {
    return (
      <>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroMain}>
                <div className={styles.heroText}>
                  <h1>Fullstack React Developer 👋🏻</h1>
                  <p> Hi, i am Yuval Sidis. A passionate Fullstack and React Developer based in israel. 📍</p>
                  <div className={styles.heroLinks}>
                    <a href='https://www.linkedin.com/in/yuval-sidis-7789122a0/'><LinkedInIcon /></a>
                    <a href='https://github.com/yuvalsidis'><GitHubIcon /></a>
                  </div>
                </div>
                <div className={styles.heroImg}></div>
              </div>
              <div className={styles.skills}>
                <p>Tech stack</p>  
                <ul>
                  <li>
                    <img src='/img/html.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/css.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/js.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/ts.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/react.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/next.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/sass.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/vite.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/nodejs.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/npm.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/git.svg' alt="img"></img>
                  </li>
                  <li>
                    <img src='/img/vercel.svg' alt="img"></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutImg}>
                <Image width={64} height={64} src='/img/workEmoji.png' className={styles.workEmoji} alt="img"></Image>
                <span className={styles.aboutImgSpan}>
                  <Image  width={64} height={64} src='img/RotatedSVG.svg' className={styles.rotatedSvg} alt="img"></Image>
                </span>
              </div>
              <div className={styles.aboutText}>
                <h2>ABOUT ME</h2>
                <h1>Fullstack Developer Based in Israel 📍</h1>
                <p>Hey there, I am Yuval Sidis, a Fullstack Developer with a passion for crafting beautiful,
                  clean websites. My main focus is on frontend development,
                  where I specialize in creating seamless user experiences and captivating interfaces.
                </p>
                <p>
                  My stack primarily revolves around React/Next.js for frontend development,
                  where I dedicate myself to delivering high-quality solutions that exceed
                  user expectations while meeting technical requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.projectsContainer}>
            <h1>My Work</h1>
            <ProjectSection/>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContant}>
              <div className={styles.contactTitles}>
                <h4>Contact</h4>
                <p>Dont be shy! Hit me up! 👇</p>
              </div>
              <div className={styles.contactReasources}>
                <div className={styles.ResourceItem}>
                  <div>
                    <LocationOnOutlinedIcon style={{
                      backgroundColor: '#147efb',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '5px', 
                    }}/>
                  </div>
                  <div>
                    <p>Location</p>
                    <p>Israel</p>
                  </div>
                </div>
                <div className={styles.ResourceItem}>
                  <div>
                    <EmailOutlinedIcon style={{
                      backgroundColor: '#147efb',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '5px', 
                    }}/>
                  </div>
                  <div>
                    <p>mail</p>
                    <EmailLink/>
                  </div>
                </div>
                <div className={styles.ResourceItem}>
                  <div>
                    <LocalPhoneOutlinedIcon style={{
                      backgroundColor: '#147efb',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '5px', 
                    }} />
                  </div>
                  <div>
                    <p>phone</p>
                    <p>+972532778502</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default MainSection;
