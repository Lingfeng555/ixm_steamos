import React from 'react';
import styles from './GamingMode.module.css';

const GamingMode = () => {
  return (
    <section id="gaming" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src="/gaming_mode.jpeg" 
            alt="SteamOS Gaming Mode Interface" 
            className={styles.gamingImage}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Immersive Gaming Mode</h2>
          <p className={styles.description}>
            Switch seamlessly to our optimized Gaming Mode interface, designed specifically for 
            controller-first navigation and couch gaming comfort. Experience your games in a 
            streamlined environment that puts your content front and center.
          </p>
          <ul className={styles.featureList}>
            <li>Controller-optimized interface</li>
            <li>Quick access to your game library</li>
            <li>Instant switching between games</li>
            <li>Built-in performance overlay</li>
            <li>Easy access to community features</li>
            <li>Customizable controller layouts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GamingMode;