'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ChatBot.module.css';

interface Message {
  id: number;
  type: 'bot' | 'user' | 'system';
  content: string;
  timestamp: Date;
}

type ChatMode = 'ai' | 'human';

export default function ChatBot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: t.chatbot.welcome,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>('ai');
  const [isHumanOnline, setIsHumanOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: chatMode === 'ai' 
          ? (language === 'vi' 
            ? 'Cảm ơn bạn đã liên hệ. AI đang xử lý yêu cầu của bạn...'
            : 'Thank you for contacting us. AI is processing your request...')
          : (language === 'vi'
            ? 'Chuyên viên đang xem tin nhắn của bạn và sẽ phản hồi ngay...'
            : 'Our specialist is reviewing your message and will respond shortly...'),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSwitchToHuman = () => {
    if (chatMode === 'ai') {
      setChatMode('human');
      setIsHumanOnline(true);
      
      const systemMessage: Message = {
        id: Date.now(),
        type: 'system',
        content: t.chatbot.handover,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, systemMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ), 
      text: language === 'vi' ? 'Thuê xe' : 'Rent a car',
      action: language === 'vi' ? 'Tôi muốn thuê xe cao cấp' : 'I want to rent a luxury car'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ), 
      text: language === 'vi' ? 'Sửa chữa' : 'Repair',
      action: language === 'vi' ? 'Tôi cần dịch vụ sửa chữa' : 'I need repair service'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
          <circle cx="12" cy="12" r="5"/>
        </svg>
      ), 
      text: language === 'vi' ? 'Chăm sóc' : 'Detailing',
      action: language === 'vi' ? 'Tôi quan tâm dịch vụ detailing' : 'I\'m interested in detailing'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ), 
      text: language === 'vi' ? 'Báo giá' : 'Quote',
      action: language === 'vi' ? 'Tôi muốn nhận báo giá' : 'I want a quote'
    }
  ];

  return (
    <>
      {/* Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className={styles.launcher}
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={styles.launcherIcon}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </motion.div>

            {/* Pulse Ring */}
            <motion.div
              className={styles.pulseRing}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Badge */}
            <motion.div
              className={styles.launcherBadge}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t.chatbot.launcher}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className={`${styles.header} ${chatMode === 'human' && isHumanOnline ? styles.humanActive : ''}`}>
              <div className={styles.headerLeft}>
                <motion.div 
                  className={styles.avatar}
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={chatMode === 'human' 
                      ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                      : "https://www.genspark.ai/api/files/s/c1swVNfa"
                    } 
                    alt="Avatar"
                  />
                </motion.div>

                <div className={styles.headerInfo}>
                  <h4>
                    {chatMode === 'ai' 
                      ? t.chatbot.header 
                      : (language === 'vi' ? 'Chuyên Viên TingCar' : 'TingCar Specialist')}
                  </h4>
                  <p className={styles.status}>
                    <span className={styles.statusIndicator}></span>
                    {t.chatbot.status}
                  </p>
                </div>
              </div>

              <div className={styles.headerActions}>
                {/* Mode Switch */}
                <motion.button
                  className={styles.modeSwitch}
                  onClick={handleSwitchToHuman}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={language === 'vi' 
                    ? (chatMode === 'ai' ? 'Chuyển sang chat với người' : 'Đang chat với người')
                    : (chatMode === 'ai' ? 'Switch to human' : 'Chatting with human')}
                >
                  {chatMode === 'ai' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  )}
                </motion.button>

                {/* Close Button */}
                <motion.button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Messages Area */}
            <div className={styles.messagesArea}>
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`${styles.message} ${styles[message.type]}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {message.type !== 'user' && (
                      <div className={styles.messageAvatar}>
                        {message.type === 'system' ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23 4 23 10 17 10"/>
                            <polyline points="1 20 1 14 7 14"/>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                        )}
                      </div>
                    )}
                    <div className={styles.messageBubble}>
                      <p>{message.content}</p>
                      <span className={styles.messageTime}>
                        {message.timestamp.toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    className={`${styles.message} ${styles.bot}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.messageAvatar}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <div className={styles.messageBubble}>
                      <div className={styles.typingIndicator}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <motion.div
                className={styles.quickActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    className={styles.quickAction}
                    onClick={() => {
                      setInputValue(action.action);
                      inputRef.current?.focus();
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={styles.quickActionIcon}>{action.icon}</span>
                    <span className={styles.quickActionText}>{action.text}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Input Area */}
            <div className={styles.inputArea}>
              <div className={styles.inputWrapper}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t.chatbot.placeholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={styles.input}
                />
                <motion.button
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </motion.button>
              </div>

              {/* Powered By */}
              <div className={styles.poweredBy}>
                <span>{language === 'vi' ? 'Được hỗ trợ bởi' : 'Powered by'}</span>
                <strong>TingCar AI</strong>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
