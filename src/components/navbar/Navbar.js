import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/steam-logo.png" alt="Steam Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#features">Features</a></li>
        <li><a href="#performance">Performance</a></li>
        <li><a href="#hardware">Hardware</a></li>
        <li><a href="#raytracing">Ray Tracing</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <div className={styles.downloadButton}>
        <a href="#download" className={styles.ctaButton}>Download</a>
      </div>
    </nav>
  );
};

export default Navbar;