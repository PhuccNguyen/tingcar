// src/components/Hero/Hero.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  // Multiple video sources as fallback
  const videoSources = [
    {
      src: '/video/car.mp4',
      type: 'video/mp4',
      label: 'Primary Car'
    },
    {
      src: '/video/coverr-hitting-the-gas-1296-1080p.mp4',
      type: 'video/mp4',
      label: 'Fallback Wave'
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.75; // Slow motion cho cinematic feel
      
      // Lắng nghe sự kiện video kết thúc để chuyển sang video tiếp theo
      const handleVideoEnded = () => {
        setCurrentVideoIndex((prevIndex) => 
          (prevIndex + 1) % videoSources.length
        );
      };
      
      video.addEventListener('ended', handleVideoEnded);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Thay đổi video source khi currentVideoIndex thay đổi
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = videoSources[currentVideoIndex].src;
      video.load();
      video.play().catch(err => console.error('Video play error:', err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoIndex]);

  const handleVideoError = () => {
    console.error('Video loading failed, trying fallback...');
    setVideoError(true);
  };

  const scrollToRenting = () => {
    const element = document.getElementById('renting');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Video Background */}
      <motion.div 
        className={styles.videoContainer}
        style={{ scale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={styles.video}
          onError={handleVideoError}
          poster="/images/hero-poster.jpg"
        >
          <source 
            src={videoSources[currentVideoIndex].src} 
            type={videoSources[currentVideoIndex].type}
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>

        {/* Gradient Overlay for better text contrast */}
        <div className={styles.gradientOverlay}></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className={styles.content}
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className={styles.title}>
            {t.hero.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.button
          className={styles.cta}
          onClick={scrollToRenting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t.hero.cta}</span>
          <svg 
            className={styles.ctaIcon}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
