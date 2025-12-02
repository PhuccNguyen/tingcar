import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ChatBot from '@/components/ChatBot/ChatBot';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tingcar.com'),
  title: {
    default: 'TingCar - Luxury & Exotic Car Rental in Vietnam | Premium Car Services',
    template: '%s | TingCar',
  },
  description: 'TingCar offers premium luxury and exotic car rental services in Vietnam. Rent Rolls-Royce, Ferrari, Lamborghini, and more. Professional car repair and detailing services available.',
  keywords: [
    'luxury car rental Vietnam',
    'exotic car rental',
    'Rolls-Royce rental',
    'Ferrari rental',
    'Lamborghini rental',
    'supercar rental Ho Chi Minh',
    'premium car detailing',
    'luxury car repair',
    'exotic car maintenance',
    'high-end car services',
    'TingCar',
    'prestige car rental',
    'luxury vehicle rental',
  ],
  authors: [{ name: 'TingCar' }],
  creator: 'TingCar',
  publisher: 'TingCar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/image/tingcar-logo-full.png',
    shortcut: '/image/tingcar-logo-full.png',
    apple: '/image/tingcar-logo-full.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: 'https://tingcar.com',
    siteName: 'TingCar',
    title: 'TingCar - Luxury & Exotic Car Rental in Vietnam',
    description: 'Premium luxury and exotic car rental services. Experience the finest vehicles including Rolls-Royce, Ferrari, Lamborghini. Professional repair and detailing services.',
    images: [
      {
        url: '/image/cover-facebook-tingcar.png',
        width: 1200,
        height: 630,
        alt: 'TingCar - Luxury Car Rental Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tingcar',
    creator: '@tingcar',
    title: 'TingCar - Luxury & Exotic Car Rental',
    description: 'Premium luxury and exotic car rental in Vietnam. Rent the finest vehicles with exceptional service.',
    images: ['/image/cover-x-tingcar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tingcar.com',
    languages: {
      'en-US': 'https://tingcar.com',
      'vi-VN': 'https://tingcar.com/vi',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
  },
  category: 'automotive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <Analytics />
        <link rel="canonical" href="https://tingcar.com" />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
