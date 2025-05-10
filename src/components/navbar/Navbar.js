import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const isManualScroll = useRef(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isManualScroll.current) return;

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to check scroll position
      scrollTimeout.current = setTimeout(() => {
        const sections = ['features', 'performance', 'showcase', 'hardware', 'support'];
        const navbarHeight = 74;
        
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight;
          }
          return false;
        });
        
        if (current) {
          setActiveSection(current);
        }
      }, 100); // Small delay to ensure smooth performance
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      isManualScroll.current = false; // Disable scroll detection
      setActiveSection(sectionId); // Set active section immediately

      const navbarHeight = 74;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });

      // Re-enable scroll detection after animation completes
      setTimeout(() => {
        isManualScroll.current = true;
      }, 1000); // Typical smooth scroll duration
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/steam-logo.png" alt="Steam Logo" />
      </div>
      <ul className={styles.navLinks}>
        {[
          { id: 'features', text: 'Features' },
          { id: 'performance', text: 'Performance' },
          { id: 'showcase', text: 'Showcase' },
          { id: 'hardware', text: 'Hardware' },
          { id: 'support', text: 'Support' }
        ].map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={activeSection === id ? styles.active : ''}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.downloadButton}>
        <a href="#download" className={styles.ctaButton} onClick={(e) => scrollToSection(e, 'download')}>
          Download
        </a>
      </div>
    </nav>
  );
};

export default Navbar;