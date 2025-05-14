import React, { useState } from 'react';
import styles from './NewsletterModal.module.css';
import SteamLogin from './SteamLogin';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Newsletter subscription:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest SteamOS news and features!</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.checkboxGroup}>
            <h3>I'm interested in:</h3>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="gaming"
                onChange={handleChange}
              />
              Gaming News
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="hardware"
                onChange={handleChange}
              />
              Hardware Updates
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="features"
                onChange={handleChange}
              />
              New Features
            </label>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Subscribe
          </button>
        </form>

        <SteamLogin />
      </div>
    </div>
  );
};

export default NewsletterModal;