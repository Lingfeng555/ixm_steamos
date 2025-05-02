import React, { useState } from 'react';
import styles from './Support.module.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      question: "What are the minimum system requirements?",
      answer: "SteamOS can run on most modern systems. For basic functionality: 4GB RAM, 32GB storage, and a 64-bit processor. For gaming, we recommend 8GB+ RAM and dedicated graphics."
    },
    {
      question: "Can I install Windows games on SteamOS?",
      answer: "Yes! SteamOS includes Proton, a compatibility layer that allows most Windows games to run seamlessly on Linux-based systems."
    },
    {
      question: "How do I install SteamOS on my device?",
      answer: "Download the SteamOS installer from our website, create a bootable USB drive, and follow our step-by-step installation guide in the documentation."
    },
    {
      question: "Is SteamOS free?",
      answer: "Yes, SteamOS is completely free and open-source. You can download, modify, and distribute it according to the license terms."
    }
  ];

  return (
    <section className={styles['support-section']}>
      <h2 className={styles['section-title']}>Support & FAQ</h2>
      <p className={styles['tagline-sub']}>
        Need help? We're here for you. Check our FAQ or reach out to our support team.
      </p>

      <div className={styles['support-container']}>
        <div className={styles['faq-section']}>
          <h3 className={styles['support-subtitle']}>Frequently Asked Questions</h3>
          <div className={styles['faq-list']}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles['faq-item']}>
                <h4 className={styles['faq-question']}>{item.question}</h4>
                <p className={styles['faq-answer']}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['contact-section']}>
          <h3 className={styles['support-subtitle']}>Contact Support</h3>
          <form onSubmit={handleSubmit} className={styles['contact-form']}>
            <div className={styles['form-group']}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles['submit-button']}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;