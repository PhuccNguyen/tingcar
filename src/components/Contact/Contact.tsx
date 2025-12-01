'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { t, language } = useLanguage();

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/TingCarApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/TingCarApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/TingCarApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@tingcarapp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@TingCarApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.881 11.881 0 0 0-2.588-.12c-1.084.063-1.935.394-2.533.985-.577.571-.862 1.28-.825 2.047.033.75.396 1.364.995 1.785.586.413 1.367.6 2.255.541 1.188-.08 2.048-.543 2.623-1.414.543-.823.772-1.931.676-3.293l-.027-.377h1.997l.03.412c.086 1.17-.082 2.354-.488 3.427.9.436 1.595.95 2.07 1.532.677.828 1.007 1.888.978 3.15-.04 1.774-.818 3.39-2.258 4.683-1.627 1.462-3.79 2.2-6.434 2.191zm-.014-22c-2.618.018-4.664.843-6.08 2.455C4.673 6.133 3.975 8.425 3.948 12c.027 3.575.725 5.867 2.143 7.535 1.416 1.612 3.462 2.437 6.08 2.455 2.382-.018 4.323-.638 5.77-1.843 1.194-1.072 1.827-2.41 1.86-3.897.02-.96-.215-1.79-.7-2.465-.454-.633-1.118-1.152-1.974-1.544l-.515-.235.138-.537c.358-1.396.491-2.897.379-4.463l-.05-.698h-1.002l-.027.377c-.097 1.362-.327 2.47-.676 3.293-.575.871-1.435 1.334-2.623 1.414-.888.059-1.669-.128-2.255-.541-.599-.421-.962-1.035-.995-1.785-.037-.767.248-1.476.825-2.047.598-.591 1.449-.922 2.533-.985.914-.053 1.819-.019 2.588.12l.126-1.974a13.853 13.853 0 0 0-3.02-.142c-1.464.084-2.703.531-3.583 1.291-.922.797-1.395 1.892-1.33 3.082.067 1.224.689 2.275 1.752 2.964.898.583 2.057.866 3.259.801 1.59-.086 2.844-.688 3.73-1.79.662-.826 1.092-1.92 1.284-3.272.761.45 1.324 1.04 1.634 1.75.528 1.205.557 3.185-1.09 4.798-1.442 1.414-3.177 2.025-5.8 2.045-2.909-.019-5.11-.934-6.54-2.717C4.307 17.496 3.616 15.086 3.589 12c.027-3.086.718-5.496 2.057-7.164 1.43-1.781 3.631-2.695 6.54-2.717 4.406.031 7.2 2.055 8.304 6.015l2.04-.569c-.651-2.337-1.832-4.177-3.509-5.467C17.229.745 14.932.04 12.186.02z"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      ),
      label: t.contact.info.hotline,
      value: '+84 123 456 789',
      link: 'tel:+84123456789'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: t.contact.info.email,
      value: 'concierge@tingcar.com',
      link: 'mailto:concierge@tingcar.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: t.contact.info.location,
      value: language === 'vi' 
        ? '123 Đại Lộ Sang Trọng, Quận 1, TP.HCM'
        : '123 Luxury Boulevard, District 1, Ho Chi Minh City',
      link: 'https://maps.google.com/?q=123+Luxury+Boulevard+District+1+Ho+Chi+Minh+City'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            {language === 'vi' 
              ? 'Chúng tôi luôn sẵn sàng phục vụ bạn 24/7'
              : 'We are always ready to serve you 24/7'}
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>{t.contact.info.title}</h3>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className={styles.infoItem}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className={styles.mapContainer}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.mapPlaceholder}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>{language === 'vi' ? 'Bản đồ' : 'Map View'}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social & QR */}
          <motion.div
            className={styles.socialSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>{t.contact.social.title}</h3>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* QR Codes */}
            <div className={styles.qrSection}>
              <h4>{t.contact.qr.title}</h4>
              <div className={styles.qrGrid}>
                <motion.div
                  className={styles.qrCard}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.qrPlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                    </svg>
                  </div>
                  <p>{t.contact.qr.zalo}</p>
                </motion.div>

                <motion.div
                  className={styles.qrCard}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.qrPlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                    </svg>
                  </div>
                  <p>{t.contact.qr.telegram}</p>
                </motion.div>
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              className={styles.businessHours}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4>{language === 'vi' ? 'Giờ Làm Việc' : 'Business Hours'}</h4>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursItem}>
                  <span>{language === 'vi' ? 'Thứ 2 - Thứ 6' : 'Mon - Fri'}</span>
                  <span>8:00 - 20:00</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>{language === 'vi' ? 'Thứ 7' : 'Saturday'}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>{language === 'vi' ? 'Chủ Nhật' : 'Sunday'}</span>
                  <span>10:00 - 17:00</span>
                </div>
                <div className={`${styles.hoursItem} ${styles.emergency}`}>
                  <span>{language === 'vi' ? 'Khẩn Cấp' : 'Emergency'}</span>
                  <span>24/7</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
