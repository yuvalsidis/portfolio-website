
import "./globals.css";
import { Children } from "react";
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./cmps/Nav'), { ssr: false });

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <header>
          <h3 className="logo">Yuval.dev</ h3>
          <Nav />
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
