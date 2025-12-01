'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t, language } = useLanguage();

  const team = [
    {
      id: 1,
      name: t.about.team.master1.name,
      role: t.about.team.master1.role,
      cert: t.about.team.master1.cert,
      image: '/image-person/IMG_20250329_124438.jpg',
      specialties: [
        language === 'vi' ? 'Động cơ Ferrari' : 'Ferrari Engines',
        language === 'vi' ? 'Hệ thống điện' : 'Electrical Systems',
        language === 'vi' ? 'Chẩn đoán' : 'Diagnostics'
      ]
    },
    {
      id: 2,
      name: t.about.team.master2.name,
      role: t.about.team.master2.role,
      cert: t.about.team.master2.cert,
      image: '/image-person/IMG_20250329_124438.jpg',
      specialties: [
        language === 'vi' ? 'Ceramic Pro' : 'Ceramic Pro',
        language === 'vi' ? 'Paint Correction' : 'Paint Correction',
        language === 'vi' ? 'PPF Installation' : 'PPF Installation'
      ]
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: language === 'vi' ? 'Khởi Đầu' : 'Foundation',
      description: language === 'vi' 
        ? 'Thành lập TingCar với tầm nhìn mang đến dịch vụ cao cấp'
        : 'Founded TingCar with vision to deliver premium services'
    },
    {
      year: '2015',
      title: language === 'vi' ? 'Mở Rộng' : 'Expansion',
      description: language === 'vi' 
        ? 'Ra mắt dịch vụ detailing chuyên nghiệp'
        : 'Launched professional detailing services'
    },
    {
      year: '2018',
      title: language === 'vi' ? 'Công Nhận' : 'Recognition',
      description: language === 'vi' 
        ? 'Được chứng nhận bởi Ferrari và Lamborghini'
        : 'Certified by Ferrari and Lamborghini'
    },
    {
      year: '2024',
      title: language === 'vi' ? 'Hệ Sinh Thái' : 'Ecosystem',
      description: language === 'vi' 
        ? 'Tích hợp vào TrustLabs Ecosystem'
        : 'Integrated into TrustLabs Ecosystem'
    }
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: language === 'vi' ? 'Xuất Sắc' : 'Excellence',
      description: language === 'vi' 
        ? 'Cam kết chất lượng vượt trội trong mọi chi tiết'
        : 'Committed to superior quality in every detail'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: language === 'vi' ? 'Tin Cậy' : 'Trust',
      description: language === 'vi' 
        ? 'Xây dựng niềm tin qua từng dịch vụ'
        : 'Building trust through every service'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: language === 'vi' ? 'Đổi Mới' : 'Innovation',
      description: language === 'vi' 
        ? 'Áp dụng công nghệ tiên tiến nhất'
        : 'Applying cutting-edge technology'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: language === 'vi' ? 'Khách Hàng' : 'Customer First',
      description: language === 'vi' 
        ? 'Đặt khách hàng làm trung tâm'
        : 'Putting customers at the center'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t.about.title}</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        {/* Vision Story */}
        <motion.div
          className={styles.visionSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.visionContent}>
            <motion.div
              className={styles.visionImage}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80" 
                alt="TingCar Vision"
              />
              <div className={styles.visionOverlay}></div>
            </motion.div>

            <div className={styles.visionText}>
              <h3>{t.about.vision.title}</h3>
              <p>{t.about.vision.content}</p>

              <div className={styles.visionStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>
                    {language === 'vi' ? 'Năm' : 'Years'}
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>
                    {language === 'vi' ? 'Chuyên Gia' : 'Experts'}
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>5000+</div>
                  <div className={styles.statLabel}>
                    {language === 'vi' ? 'Khách Hàng' : 'Clients'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className={styles.valuesSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.subsectionTitle}>
            {language === 'vi' ? 'Giá Trị Cốt Lõi' : 'Core Values'}
          </h3>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={styles.valueIcon}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className={styles.timelineSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.subsectionTitle}>
            {language === 'vi' ? 'Hành Trình' : 'Our Journey'}
          </h3>

          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className={styles.teamSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.subsectionTitle}>
            {language === 'vi' ? 'Đội Ngũ Chuyên Gia' : 'Expert Team'}
          </h3>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -15 }}
              >
                <div className={styles.teamImageWrapper}>
                  <motion.div
                    className={styles.teamImage}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={member.image} alt={member.name} />
                    <div className={styles.teamOverlay}></div>
                  </motion.div>

                  {/* Certification Badge */}
                  <div className={styles.certBadge}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>

                <div className={styles.teamContent}>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamCert}>{member.cert}</p>

                  <div className={styles.specialties}>
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className={styles.specialty}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className={styles.certificationsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.subsectionTitle}>
            {language === 'vi' ? 'Chứng Nhận & Đối Tác' : 'Certifications & Partners'}
          </h3>

          <div className={styles.certifications}>
            {[
              'Ferrari Authorized',
              'Lamborghini Certified',
              'Ceramic Pro Elite',
              'XPEL Ultimate Plus',
              'Porsche Approved',
              'McLaren Certified'
            ].map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.certIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <p>{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
