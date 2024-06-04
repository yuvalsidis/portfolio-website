
import { Children } from "react";
import "./globals.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h3 className="logo">Yuval.dev</ h3>
          <nav>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Project">Projects</a>
            <a href="#  Contact">Contact</a>
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
