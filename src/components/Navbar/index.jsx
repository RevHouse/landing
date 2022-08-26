
import "./navbar.css";
import Logo from '../../assets/logo-navbar.svg'

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu.jsx";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <a href="/home" className="navbar-logo">
          <img src={Logo} alt="logo" />
        </a>
        <div className="mobile-navbar">
        <HamburgerMenu />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
