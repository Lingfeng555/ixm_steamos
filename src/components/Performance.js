import React from 'react';
import styles from './Performance.module.css';

const Performance = () => {
  return (
    <section className={styles['performance-section']}>
      <h2 className={styles['section-title']}>Performance Improvements</h2>
      <div className={styles['chart-container']}>
        <div className={styles.chart}>
          <div className={styles['chart-bar']} style={{ height: '60%' }}>
            <span className={styles['chart-label']}>Windows</span>
            <span className={styles['chart-value']}>60 FPS</span>
          </div>
          <div className={styles['chart-bar']} style={{ height: '90%' }}>
            <span className={styles['chart-label']}>SteamOS</span>
            <span className={styles['chart-value']}>90 FPS</span>
          </div>
        </div>
        <p className={styles['chart-caption']}>Average FPS in Popular Games</p>
      </div>
    </section>
  );
};

export default Performance;