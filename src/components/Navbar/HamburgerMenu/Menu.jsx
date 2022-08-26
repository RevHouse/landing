//Core
import React from "react";
import styles from "./HamburgerMenu.module.scss";

const Menu = ({ className }) => (
  <div className={className}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <a href="#culture">OUR MISSION</a>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="#services-page">SERVICES</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="#contact-page-container">CONTACT</a>
      </li>
    </ul>
  </div>
);

export default Menu;
