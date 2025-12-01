'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Repairing.module.css';

export default function Repairing() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    vehicle: '',
    issue: '',
    datetime: ''
  });
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: t.repairing.services.maintenance.title,
      description: t.repairing.services.maintenance.description,
      features: [
        language === 'vi' ? 'Thay dầu & lọc dầu' : 'Oil & Filter Change',
        language === 'vi' ? 'Kiểm tra phanh' : 'Brake Inspection',
        language === 'vi' ? 'Kiểm tra hệ thống' : 'System Check',
        language === 'vi' ? 'Báo cáo chi tiết' : 'Detailed Report'
      ]
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: t.repairing.services.engine.title,
      description: t.repairing.services.engine.description,
      features: [
        language === 'vi' ? 'Chẩn đoán điện tử' : 'Electronic Diagnostics',
        language === 'vi' ? 'Sửa chữa động cơ' : 'Engine Repair',
        language === 'vi' ? 'Bảo dưỡng hộp số' : 'Transmission Service',
        language === 'vi' ? 'Kiểm tra hiệu suất' : 'Performance Testing'
      ]
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          <path d="M9 22V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v18"/>
        </svg>
      ),
      title: t.repairing.services.bodywork.title,
      description: t.repairing.services.bodywork.description,
      features: [
        language === 'vi' ? 'Sơn chuẩn nhà máy' : 'Factory Paint Matching',
        language === 'vi' ? 'Sửa chữa va chạm' : 'Collision Repair',
        language === 'vi' ? 'Phục hồi thân xe' : 'Body Restoration',
        language === 'vi' ? 'Bảo hành 2 năm' : '2-Year Warranty'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="repairing" className={styles.repairing}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.repairing.title}</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            {language === 'vi' 
              ? 'Bảo tồn sự xuất sắc ô tô với dịch vụ chuyên nghiệp'
              : 'Preserving automotive excellence with professional service'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={styles.serviceIconWrapper}>
                <motion.div 
                  className={styles.serviceIcon}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              {/* Features List */}
              <div className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className={styles.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className={styles.learnMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'vi' ? 'Tìm hiểu thêm' : 'Learn More'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* SOS Banner */}
        <motion.div
          className={styles.sosBanner}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sosContent}>
            <motion.div
              className={styles.sosIcon}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(212, 175, 55, 0.7)',
                  '0 0 0 20px rgba(212, 175, 55, 0)',
                  '0 0 0 0 rgba(212, 175, 55, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </motion.div>
            <div className={styles.sosText}>
              <h3>{t.repairing.sos.title}</h3>
              <p>{t.repairing.sos.subtitle}</p>
            </div>
            <motion.a
              href="tel:+84123456789"
              className={styles.sosButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.repairing.sos.hotline}
            </motion.a>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className={styles.bookingSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.bookingHeader}>
            <h3 className={styles.bookingTitle}>{t.repairing.booking.title}</h3>
            <p className={styles.bookingSubtitle}>
              {language === 'vi' 
                ? 'Đặt lịch hẹn với chuyên gia của chúng tôi'
                : 'Schedule an appointment with our experts'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.bookingForm}>
            <div className={styles.formGrid}>
              <motion.div
                className={styles.formGroup}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="vehicle">{t.repairing.booking.vehicle}</label>
                <input
                  type="text"
                  id="vehicle"
                  placeholder={language === 'vi' ? 'VD: Rolls-Royce Phantom' : 'E.g., Rolls-Royce Phantom'}
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="datetime">
                  {language === 'vi' ? 'Ngày & Giờ Hẹn' : 'Date & Time'}
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  value={formData.datetime}
                  onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className={styles.formGroup}
              whileFocus={{ scale: 1.01 }}
            >
              <label htmlFor="issue">{t.repairing.booking.issue}</label>
              <textarea
                id="issue"
                rows={5}
                placeholder={language === 'vi' 
                  ? 'Vui lòng mô tả chi tiết vấn đề của xe...'
                  : 'Please describe the issue in detail...'}
                value={formData.issue}
                onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.repairing.booking.cta}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </motion.button>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className={styles.trustIndicators}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { 
              number: '15+', 
              label: language === 'vi' ? 'Năm Kinh Nghiệm' : 'Years Experience' 
            },
            { 
              number: '5000+', 
              label: language === 'vi' ? 'Xe Đã Sửa' : 'Cars Serviced' 
            },
            { 
              number: '98%', 
              label: language === 'vi' ? 'Hài Lòng' : 'Satisfaction' 
            },
            { 
              number: '24/7', 
              label: language === 'vi' ? 'Hỗ Trợ' : 'Support' 
            }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className={styles.indicator}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.indicatorNumber}>{indicator.number}</div>
              <div className={styles.indicatorLabel}>{indicator.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
