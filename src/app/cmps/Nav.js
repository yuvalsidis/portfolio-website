'use client'

import { useEffect, useState } from "react";
import styles from '../styles/Nav.module.scss'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Nav = () => {
    const [isWiderThan1020, setIsWiderThan1020] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsWiderThan1020(window.innerWidth > 1020)
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const onClickMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleScrollTo = (e, elementId) => {
        e.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <>
            {!isWiderThan1020 && <MenuOutlinedIcon onClick={onClickMenu} />}
            <nav className={`
            ${isWiderThan1020 ? styles.nav : styles.resizedNav}
            ${isMenuOpen ? styles.expended : ''}`}>
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>
                    Home
                </a>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>
                    About
                </a>
                <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')}>
                    Projects
                </a>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                    Contact
                </a>
            </nav>
        </>
    )
}

export default Nav;
