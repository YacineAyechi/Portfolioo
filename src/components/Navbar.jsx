"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navContainer">
      <ul>
        <li>
          <Link href="/" className={pathname == "/" ? "activeNav" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "activeNav" : ""}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/uses"
            className={pathname === "/uses" ? "activeNav" : ""}
          >
            Uses
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "activeNav" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={pathname === "/blog" ? "activeNav" : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "activeNav" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
