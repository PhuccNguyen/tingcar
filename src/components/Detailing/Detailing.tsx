'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Detailing.module.css';

export default function Detailing() {
  const { t, language } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [warrantyPlate, setWarrantyPlate] = useState('');
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const packages = [
    {
      id: 1,
      title: t.detailing.packages.ceramic.title,
      description: t.detailing.packages.ceramic.description,
      price: t.detailing.packages.ceramic.price,
      duration: language === 'vi' ? '2-3 ngày' : '2-3 days',
      features: [
        language === 'vi' ? 'Độ cứng 9H' : '9H Hardness',
        language === 'vi' ? 'Bảo vệ UV' : 'UV Protection',
        language === 'vi' ? 'Chống nước' : 'Hydrophobic',
        language === 'vi' ? 'Bảo hành 3 năm' : '3-Year Warranty'
      ],
      icon: '💎'
    },
    {
      id: 2,
      title: t.detailing.packages.ppf.title,
      description: t.detailing.packages.ppf.description,
      price: t.detailing.packages.ppf.price,
      duration: language === 'vi' ? '5-7 ngày' : '5-7 days',
      features: [
        language === 'vi' ? 'Toàn bộ xe' : 'Full Body Coverage',
        language === 'vi' ? 'Tự phục hồi' : 'Self-Healing',
        language === 'vi' ? 'Ceramic Top Coat' : 'Ceramic Top Coat',
        language === 'vi' ? 'Bảo hành 5 năm' : '5-Year Warranty'
      ],
      icon: '🛡️',
      featured: true
    },
    {
      id: 3,
      title: t.detailing.packages.wrap.title,
      description: t.detailing.packages.wrap.description,
      price: t.detailing.packages.wrap.price,
      duration: language === 'vi' ? '4-6 ngày' : '4-6 days',
      features: [
        language === 'vi' ? '500+ màu sắc' : '500+ Colors',
        language === 'vi' ? 'Hoàn nguyên được' : 'Removable',
        language === 'vi' ? 'Bảo vệ sơn gốc' : 'Paint Protection',
        language === 'vi' ? 'Bảo hành 3 năm' : '3-Year Warranty'
      ],
      icon: '🎨'
    },
    {
      id: 4,
      title: t.detailing.packages.interior.title,
      description: t.detailing.packages.interior.description,
      price: t.detailing.packages.interior.price,
      duration: language === 'vi' ? '1-2 ngày' : '1-2 days',
      features: [
        language === 'vi' ? 'Xử lý da chuyên sâu' : 'Leather Treatment',
        language === 'vi' ? 'Hơi nước khử khuẩn' : 'Steam Sanitization',
        language === 'vi' ? 'Khử mùi Ozone' : 'Ozone Treatment',
        language === 'vi' ? 'Bảo vệ nội thất' : 'Interior Protection'
      ],
      icon: '✨'
    }
  ];

  const handleWarrantyCheck = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checking warranty for:', warrantyPlate);
    // Handle warranty check
  };

  return (
    <section id="detailing" className={styles.detailing}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.detailing.title}</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            {language === 'vi' 
              ? 'Tay nghề thợ thủ công đỉnh cao cho sự hoàn hảo vượt thời gian'
              : 'Artisan-level craftsmanship for timeless perfection'}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`${styles.packageCard} ${pkg.featured ? styles.featured : ''} ${selectedPackage === pkg.id ? styles.selected : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.featured && (
                <div className={styles.featuredBadge}>
                  {language === 'vi' ? 'PHỔ BIẾN NHẤT' : 'MOST POPULAR'}
                </div>
              )}

              <div className={styles.packageIcon}>{pkg.icon}</div>

              <h3 className={styles.packageTitle}>{pkg.title}</h3>
              <p className={styles.packageDescription}>{pkg.description}</p>

              <div className={styles.packagePrice}>{pkg.price}</div>
              <div className={styles.packageDuration}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{pkg.duration}</span>
              </div>

              {/* Features */}
              <div className={styles.packageFeatures}>
                {pkg.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className={styles.packageFeature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className={styles.selectButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'vi' ? 'Chọn Gói' : 'Select Package'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Before/After Showcase */}
        <motion.div
          className={styles.showcase}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.showcaseTitle}>{t.detailing.showcase.title}</h3>

          <div className={styles.beforeAfter}>
            <div className={styles.beforeAfterContainer}>
              {/* Before Image */}
              <div className={styles.beforeImage}>
                <img 
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&q=80" 
                  alt="Before"
                />
                <div className={styles.imageLabel}>
                  {language === 'vi' ? 'TRƯỚC' : 'BEFORE'}
                </div>
              </div>

              {/* After Image */}
              <motion.div 
                className={styles.afterImage}
                style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80" 
                  alt="After"
                />
                <div className={styles.imageLabel}>
                  {language === 'vi' ? 'SAU' : 'AFTER'}
                </div>
              </motion.div>

              {/* Slider */}
              <div className={styles.sliderContainer}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterSlider}
                  onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                  className={styles.slider}
                />
                <div 
                  className={styles.sliderLine}
                  style={{ left: `${beforeAfterSlider}%` }}
                >
                  <div className={styles.sliderHandle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p className={styles.showcaseCaption}>{t.detailing.showcase.caption}</p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className={styles.gallery}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
            'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80',
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
            'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80'
          ].map((image, index) => (
            <motion.div
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className={styles.galleryOverlay}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warranty Check */}
        <motion.div
          className={styles.warrantySection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.warrantyContent}>
            <div className={styles.warrantyIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>

            <div className={styles.warrantyText}>
              <h3>{t.detailing.warranty.title}</h3>
              <p>{language === 'vi' 
                ? 'Tra cứu thông tin bảo hành của xe bạn' 
                : 'Check your vehicle warranty information'}</p>
            </div>

            <form onSubmit={handleWarrantyCheck} className={styles.warrantyForm}>
              <input
                type="text"
                placeholder={t.detailing.warranty.placeholder}
                value={warrantyPlate}
                onChange={(e) => setWarrantyPlate(e.target.value)}
                className={styles.warrantyInput}
                required
              />
              <motion.button
                type="submit"
                className={styles.warrantyButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.detailing.warranty.cta}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
