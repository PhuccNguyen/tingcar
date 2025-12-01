'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Renting.module.css';

interface Car {
  id: number;
  brand: string;
  model: string;
  type: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    drive: string;
  };
  price: string;
  available: boolean;
}

export default function Renting() {
  const { t, language } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cars: Car[] = [
    {
      id: 1,
      brand: 'Rolls-Royce',
      model: 'Phantom VIII',
      type: 'chauffeur',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
      specs: { engine: 'V12', power: '563 HP', drive: 'AWD' },
      price: language === 'vi' ? '50.000.000đ/ngày' : '$2,500/day',
      available: true
    },
    {
      id: 2,
      brand: 'Bentley',
      model: 'Continental GT',
      type: 'self-drive',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
      specs: { engine: 'W12', power: '626 HP', drive: 'AWD' },
      price: language === 'vi' ? '35.000.000đ/ngày' : '$1,800/day',
      available: true
    },
    {
      id: 3,
      brand: 'Ferrari',
      model: 'F8 Tributo',
      type: 'self-drive',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      specs: { engine: 'V8 Twin-Turbo', power: '710 HP', drive: 'RWD' },
      price: language === 'vi' ? '45.000.000đ/ngày' : '$2,200/day',
      available: true
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Aventador SVJ',
      type: 'self-drive',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=80',
      specs: { engine: 'V12', power: '770 HP', drive: 'AWD' },
      price: language === 'vi' ? '55.000.000đ/ngày' : '$2,800/day',
      available: false
    },
    {
      id: 5,
      brand: 'Rolls-Royce',
      model: 'Cullinan',
      type: 'wedding',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
      specs: { engine: 'V12', power: '563 HP', drive: 'AWD' },
      price: language === 'vi' ? '60.000.000đ/ngày' : '$3,000/day',
      available: true
    },
    {
      id: 6,
      brand: 'McLaren',
      model: '720S Spider',
      type: 'roadshow',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      specs: { engine: 'V8 Twin-Turbo', power: '710 HP', drive: 'RWD' },
      price: language === 'vi' ? '48.000.000đ/ngày' : '$2,400/day',
      available: true
    }
  ];

  const filteredCars = cars.filter(car => {
    const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand;
    const typeMatch = selectedType === 'all' || car.type === selectedType;
    return brandMatch && typeMatch;
  });

  const brands = ['all', 'Rolls-Royce', 'Bentley', 'Ferrari', 'Lamborghini', 'McLaren'];
  const types = [
    { value: 'all', label: t.renting.filter.allTypes },
    { value: 'self-drive', label: t.renting.filter.selfDrive },
    { value: 'chauffeur', label: t.renting.filter.chauffeur },
    { value: 'wedding', label: t.renting.filter.wedding },
    { value: 'roadshow', label: t.renting.filter.roadshow }
  ];

  return (
    <section id="renting" className={styles.renting}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.renting.title}</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            {language === 'vi' 
              ? 'Trải nghiệm sự xa xỉ tuyệt đỉnh với bộ sưu tập xe của chúng tôi'
              : 'Experience ultimate luxury with our curated collection'}
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Brand Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              {language === 'vi' ? 'Hãng xe' : 'Brand'}
            </label>
            <div className={styles.filterButtons}>
              {brands.map(brand => (
                <motion.button
                  key={brand}
                  className={`${styles.filterBtn} ${selectedBrand === brand ? styles.active : ''}`}
                  onClick={() => setSelectedBrand(brand)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {brand === 'all' ? t.renting.filter.allBrands : brand}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              {language === 'vi' ? 'Loại hình' : 'Type'}
            </label>
            <div className={styles.filterButtons}>
              {types.map(type => (
                <motion.button
                  key={type.value}
                  className={`${styles.filterBtn} ${selectedType === type.value ? styles.active : ''}`}
                  onClick={() => setSelectedType(type.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Car Grid */}
        <motion.div 
          className={styles.grid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className={styles.carCard}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className={styles.imageContainer}>
                  <motion.div
                    className={styles.imageWrapper}
                    animate={{ scale: hoveredCard === car.id ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={car.image} alt={`${car.brand} ${car.model}`} />
                    <div className={styles.imageOverlay}></div>
                  </motion.div>

                  {/* Status Badge */}
                  <div className={`${styles.statusBadge} ${!car.available ? styles.unavailable : ''}`}>
                    {car.available 
                      ? (language === 'vi' ? 'Có sẵn' : 'Available')
                      : (language === 'vi' ? 'Đã thuê' : 'Booked')}
                  </div>

                  {/* Type Badge */}
                  <div className={styles.typeBadge}>
                    {types.find(t => t.value === car.type)?.label}
                  </div>

                  {/* 360 View Icon */}
                  <motion.div
                    className={styles.view360}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredCard === car.id ? 1 : 0,
                      scale: hoveredCard === car.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <div className={styles.carHeader}>
                    <div>
                      <p className={styles.brand}>{car.brand}</p>
                      <h3 className={styles.model}>{car.model}</h3>
                    </div>
                    <div className={styles.price}>{car.price}</div>
                  </div>

                  {/* Specs */}
                  <div className={styles.specs}>
                    <div className={styles.spec}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      <span>{car.specs.engine}</span>
                    </div>
                    <div className={styles.spec}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                      <span>{car.specs.power}</span>
                    </div>
                    <div className={styles.spec}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                      </svg>
                      <span>{car.specs.drive}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={styles.divider}></div>

                  {/* CTA */}
                  <motion.button
                    className={styles.ctaButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!car.available}
                  >
                    <span>{t.renting.cta}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <motion.div
            className={styles.emptyState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>{language === 'vi' ? 'Không tìm thấy xe phù hợp' : 'No vehicles found'}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
