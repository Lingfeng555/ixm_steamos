import React from 'react';
import styles from './Performance.module.css';

const Performance = () => {
  const cpuData = [
    {
      name: 'Intel Core 2 Duo E8400',
      year: 2008,
      specs: '3.0 GHz, 2 Cores, 6MB Cache',
      performance: {
        fps: '45',
        ram: '1.2',
        temp: '65'
      }
    },
    {
      name: 'AMD Phenom II X4 940',
      year: 2009,
      specs: '3.0 GHz, 4 Cores, 6MB Cache',
      performance: {
        fps: '52',
        ram: '1.4',
        temp: '68'
      }
    },
    {
      name: 'Intel Core i5-2500K',
      year: 2011,
      specs: '3.3 GHz, 4 Cores, 6MB Cache',
      performance: {
        fps: '65',
        ram: '1.5',
        temp: '62'
      }
    },
    {
      name: 'AMD FX-8350',
      year: 2012,
      specs: '4.0 GHz, 8 Cores, 8MB Cache',
      performance: {
        fps: '72',
        ram: '1.6',
        temp: '70'
      }
    },
    {
      name: 'Intel Core i7-3770K',
      year: 2012,
      specs: '3.5 GHz, 4C/8T, 8MB Cache',
      performance: {
        fps: '78',
        ram: '1.6',
        temp: '64'
      }
    },
    {
      name: 'AMD A10-7850K',
      year: 2014,
      specs: '3.7 GHz, 4 Cores, 4MB Cache',
      performance: {
        fps: '58',
        ram: '1.5',
        temp: '67'
      }
    },
    {
      name: 'Intel Core i5-4590',
      year: 2014,
      specs: '3.3 GHz, 4 Cores, 6MB Cache',
      performance: {
        fps: '70',
        ram: '1.7',
        temp: '63'
      }
    },
    {
      name: 'AMD Ryzen 3 1200',
      year: 2017,
      specs: '3.1 GHz, 4 Cores, 8MB Cache',
      performance: {
        fps: '82',
        ram: '1.8',
        temp: '60'
      }
    }
  ];

  return (
    <section id="performance" className={styles['performance-section']}>
      <h2 className={styles['section-title']}>Performance Improvements</h2>
      <div className={styles['charts-container']}>
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

        <div className={styles['chart-container']}>
          <div className={styles.chart}>
            <div className={styles['chart-bar']} style={{ height: '85%' }}>
              <span className={styles['chart-label']}>Windows</span>
              <span className={styles['chart-value']}>3.4 GB</span>
            </div>
            <div className={styles['chart-bar']} style={{ height: '45%' }}>
              <span className={styles['chart-label']}>SteamOS</span>
              <span className={styles['chart-value']}>1.8 GB</span>
            </div>
          </div>
          <p className={styles['chart-caption']}>RAM Usage at Idle</p>
        </div>
      </div>

      <div className={styles['cpu-support']}>
        <h3 className={styles['cpu-title']}>Legacy CPU Performance on SteamOS</h3>
        <div className={styles['cpu-grid']}>
          {cpuData.map((cpu, index) => (
            <div key={index} className={styles['cpu-card']}>
              <div className={styles['cpu-name']}>
                {cpu.name}
                <span className={styles['cpu-year']}>{cpu.year}</span>
              </div>
              <div className={styles['cpu-specs']}>
                {cpu.specs}
              </div>
              <div className={styles['performance-stats']}>
                <div className={styles.stat}>
                  <div className={styles['stat-value']}>{cpu.performance.fps}</div>
                  <div className={styles['stat-label']}>Avg FPS</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles['stat-value']}>{cpu.performance.ram}GB</div>
                  <div className={styles['stat-label']}>RAM Usage</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles['stat-value']}>{cpu.performance.temp}°C</div>
                  <div className={styles['stat-label']}>Temp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;