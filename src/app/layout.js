
import { Children } from "react";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Front-End React Developer</h1>
          <p> Hi i am yuval sidis, A passionate Front-End and React</p>
          <p> Developer based in israel.</p>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a hred="/project">Projects</a>
            <a href="/contact">Contact</a>
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
