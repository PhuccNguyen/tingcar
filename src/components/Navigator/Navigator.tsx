'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Navigator.module.css';

export default function Navigator() {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'renting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 17h14v-5H5v5zm7-8l-7 3h14l-7-3z"/>
          <circle cx="7.5" cy="17.5" r="1.5"/>
          <circle cx="16.5" cy="17.5" r="1.5"/>
        </svg>
      ),
      title: t.navigator.renting.title,
      description: t.navigator.renting.description
    },
    {
      id: 'repairing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: t.navigator.repairing.title,
      description: t.navigator.repairing.description
    },
    {
      id: 'detailing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"/>
        </svg>
      ),
      title: t.navigator.detailing.title,
      description: t.navigator.detailing.description
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className={styles.navigator}>
      <div className="container">
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => scrollToSection(pillar.id)}
            >
              <div className={styles.shimmer}></div>
              
              <motion.div 
                className={styles.icon}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {pillar.icon}
              </motion.div>

              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.description}>{pillar.description}</p>

              <motion.div 
                className={styles.arrow}
                whileHover={{ x: 5 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
