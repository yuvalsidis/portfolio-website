import styles from '../styles/ProjectSection.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {

    return (
        <div>
            <div className={styles.ProjectSection}>
                <Image width={416} height={520} src='/img/instagram.png' className={styles.InstagramProjectImg}></Image>
                <div className={styles.ProjectContent}>
                    <h2>Instegram Project</h2>
                    <div className={styles.ProjectDescription}>
                        I've developed a social platform similar to Instagram,
                        enabling users to upload, share, and comment on images.
                        This project, built with React, SCSS, Vite, and Redux,
                        showcases a seamless user experience with demo data to illustrate its functionality.
                    </div>
                    <Link href='https://github.com/yuvalsidis/Yuvigram-frontend-instegram'>Github Repository Link</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection

