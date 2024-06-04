
import "./globals.css";
import { Children } from "react";
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RootLayout({ children }) {
 
  
  return (
    <html lang="en">
      <body>
        <header>
          <h3 className="logo">Yuval.dev</ h3>
          <nav>
            <Link href="#home" >Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className='footerContainer'>
            <div className='footerc'>
              <p>© 2024 My Website</p>
              <div>
                <LinkedInIcon style={{ color: 'white' }} />
                <GitHubIcon style={{ color: 'white' }} />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
