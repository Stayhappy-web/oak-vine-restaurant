import { useState } from "react";
import logo from "../assets/oak-vine.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo-container">
        <img
          src={logo}
          alt="Oak & Vine"
          className="logo"
        />
        <h2>Oak & Vine</h2>
      </div>

      <div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#reservation">Reservation</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;