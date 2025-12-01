'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: {
      title: language === 'vi' ? 'Dịch Vụ' : 'Services',
      links: [
        { label: t.nav.renting, id: 'renting' },
        { label: t.nav.repairing, id: 'repairing' },
        { label: t.nav.detailing, id: 'detailing' }
      ]
    },
    company: {
      title: language === 'vi' ? 'Công Ty' : 'Company',
      links: [
        { label: t.nav.about, id: 'about' },
        { label: t.nav.contact, id: 'contact' },
        { label: language === 'vi' ? 'Tuyển dụng' : 'Careers', id: 'contact' }
      ]
    },
    legal: {
      title: language === 'vi' ? 'Pháp Lý' : 'Legal',
      links: [
        { label: language === 'vi' ? 'Điều khoản' : 'Terms', id: 'home' },
        { label: language === 'vi' ? 'Bảo mật' : 'Privacy', id: 'home' },
        { label: language === 'vi' ? 'Cookie' : 'Cookies', id: 'home' }
      ]
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Column */}
          <motion.div
            className={styles.brandColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/image/TingCarlogowhite.png" 
                alt="TingCar Logo"
              />
            </motion.div>

            <p className={styles.brandDescription}>
              {language === 'vi' 
                ? 'Đỉnh cao của dịch vụ ô tô xa xỉ. Nơi sự hoàn hảo gặp gỡ đam mê.'
                : 'The pinnacle of luxury automotive service. Where perfection meets passion.'}
            </p>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {[
                { name: 'Twitter', url: 'https://x.com/TingCarApp', icon: 'X' },
                { name: 'Facebook', url: 'https://www.facebook.com/TingCarApp', icon: 'f' },
                { name: 'Instagram', url: 'https://www.instagram.com/TingCarApp', icon: 'IG' },
                { name: 'TikTok', url: 'https://www.tiktok.com/@tingcarapp', icon: 'TT' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section], columnIndex) => (
            <motion.div
              key={key}
              className={styles.linksColumn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (columnIndex + 1) }}
            >
              <h4 className={styles.columnTitle}>{section.title}</h4>
              <ul className={styles.linksList}>
                {section.links.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <button onClick={() => scrollToSection(link.id)}>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.copyright}>{t.footer.copyright}</p>
          
          <div className={styles.badges}>
            <span className={styles.badge}>
              {language === 'vi' ? '🏆 Chứng nhận ISO 9001' : '🏆 ISO 9001 Certified'}
            </span>
            <span className={styles.badge}>
              {language === 'vi' ? '⭐ Đánh giá 5 sao' : '⭐ 5-Star Rated'}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
