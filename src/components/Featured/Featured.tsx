'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Featured.module.css';

export default function Featured() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const cars = [
    {
      id: 1,
      name: t.featured.cars.phantom.name,
      tagline: t.featured.cars.phantom.tagline,
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&q=80',
      specs: ['V12 Engine', '563 HP', 'AWD', '0-60 mph in 5.1s']
    },
    {
      id: 2,
      name: t.featured.cars.aventador.name,
      tagline: t.featured.cars.aventador.tagline,
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200&q=80',
      specs: ['V12 Engine', '730 HP', 'AWD', '0-60 mph in 2.9s']
    },
    {
      id: 3,
      name: t.featured.cars.ferrari.name,
      tagline: t.featured.cars.ferrari.tagline,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80',
      specs: ['V8 Twin-Turbo', '710 HP', 'RWD', '0-60 mph in 2.9s']
    }
  ];

  return (
    <section className={styles.featured}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.featured.title}</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        {/* Featured Grid */}
        <div className={styles.grid}>
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              className={styles.carCard}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <motion.div
                  className={styles.imageWrapper}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={car.image} alt={car.name} />
                  <div className={styles.imageOverlay}></div>
                  
                  {/* Hover Icon */}
                  <motion.div
                    className={styles.viewIcon}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Badge */}
                <motion.div
                  className={styles.badge}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <span>Featured</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <motion.h3
                  className={styles.carName}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {car.name}
                </motion.h3>

                <motion.p
                  className={styles.carTagline}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {car.tagline}
                </motion.p>

                {/* Specs */}
                <motion.div
                  className={styles.specs}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {car.specs.map((spec, i) => (
                    <div key={i} className={styles.spec}>
                      <div className={styles.specDot}></div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.button
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Brands */}
        <motion.div
          className={styles.trustSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className={styles.trustTitle}>{t.trust.title}</h3>
          <div className={styles.brandLogos}>
            {['Rolls-Royce', 'Bentley', 'Ferrari', 'Lamborghini', 'McLaren', 'Porsche'].map((brand, index) => (
              <motion.div
                key={brand}
                className={styles.brandLogo}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: 'var(--color-champagne-gold)' }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
