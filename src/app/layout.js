
import { Children } from "react";
import "./globals.css";


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
          <p>© 2023 My Website</p>
        </footer>
      </body>
    </html>
  );
}
