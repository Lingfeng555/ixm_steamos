import React, { useState } from 'react';
import styles from './Header.module.css';
import NewsletterModal from './NewsletterModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src="/steam-logo.png" alt="SteamOS Logo" className={styles['steam-logo']} />
      </div>
      <div className={styles.contentContainer}>
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
        <button 
          className={styles.newsletterButton}
          onClick={() => setIsModalOpen(true)}
        >
          Subscribe to Updates
        </button>
      </div>
      <NewsletterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Header;