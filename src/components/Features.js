import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles['features-grid']}>
      <div className={styles['feature-card']}>
        <h3 className={styles['feature-title']}>Universal Compatibility</h3>
        <p className={styles['feature-description']}>
          Optimized to work on any hardware configuration, from basic setups to high-end gaming machines
        </p>
      </div>
      
      <div className={styles['feature-card']}>
        <h3 className={styles['feature-title']}>Optimized Performance</h3>
        <p className={styles['feature-description']}>
          Enhanced gaming engine for maximum performance and lower latency on any device
        </p>
      </div>
      
      <div className={styles['feature-card']}>
        <h3 className={styles['feature-title']}>Extensive Library</h3>
        <p className={styles['feature-description']}>
          Access thousands of games optimized for SteamOS, with Windows titles compatibility
        </p>
      </div>
      
      <div className={styles['feature-card']}>
        <h3 className={styles['feature-title']}>Adaptive Interface</h3>
        <p className={styles['feature-description']}>
          Smooth experience on traditional monitors, touch screens, and TVs
        </p>
      </div>
    </div>
  );
};

export default Features;