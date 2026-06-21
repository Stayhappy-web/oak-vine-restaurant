import logo from "../assets/oak-vine.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Oak & Vine Logo" className="logo" />
        <h2>Oak & Vine</h2>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#reservation">Reservation</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;