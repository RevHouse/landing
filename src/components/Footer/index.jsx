import "./footer.css";
import logo from "../../assets/logo-navbar.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo" />
        <p>All rights reserved RevHouse 2022</p>
      </div>
      <div className="left-section">
        <div className="contact-section">
          <h1>Contact</h1>
          <p>sales@revhouse.io</p>
          <p>Villa Carlos Paz, Córdoba, Argentina.</p>
          <p>Delaware, United States.</p>
        </div>
        <div className="social-section">
          <h1>Follow Us!</h1>
          <a
            className="social-net"
            href="https://www.linkedin.com/company/revolutionhouse/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className="social-net"
            href="https://www.instagram.com/revhouse.io/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
