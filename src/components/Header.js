import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <img src="/steam-logo.png" alt="SteamOS Logo" className={styles['steam-logo']} />
      <h1 className={styles.title}>SteamOS</h1>
      <p className={styles.subtitle}>
        The definitive gaming operating system, designed to deliver the best experience on any hardware
      </p>
      <p className={styles.tagline}>
        Now you can enjoy your Steam library everywhere and with your family
      </p>
      <p className={styles['tagline-sub']}>
        From your living room to your pocket device - Gaming without boundaries
      </p>
    </div>
  );
};

export default Header;