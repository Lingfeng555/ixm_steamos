import React from 'react';
import styles from './DistroIntegration.module.css';

const DistroIntegration = () => {
  return (
    <section id="distro" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Linux Distribution Integration</h2>
          <p className={styles.description}>
            SteamOS seamlessly integrates with popular Linux distributions, providing a unified gaming experience across the open-source ecosystem. Our platform-agnostic approach ensures:
          </p>
          <ul className={styles.featureList}>
            <li>Native package management support for major distributions</li>
            <li>Proton compatibility layer across all Linux systems</li>
            <li>Shared controller configurations and input methods</li>
            <li>Cross-distribution game save synchronization</li>
            <li>Unified gaming overlay and chat features</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/distro_integration.jpg" 
            alt="SteamOS Linux Distribution Integration" 
            className={styles.integrationImage}
          />
        </div>
      </div>
    </section>
  );
};

export default DistroIntegration;