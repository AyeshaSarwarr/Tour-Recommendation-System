'use client'
import Link from "next/link";
import "./CSS/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Travel</div>
      <nav>
        <ul>
          <li>
            <Link href="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about_us" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <button className="btn-contact">Get in Touch</button>
    </header>
  );
}

export default Navbar;
