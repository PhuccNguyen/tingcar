import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ChatBot from '@/components/ChatBot/ChatBot';
import './globals.css';

export const metadata: Metadata = {
  title: 'TingCar - Luxury & Exotic Car Rental',
  description: 'Masterpiece in Motion. Where Luxury Meets Performance.',
  keywords: 'luxury car rental, exotic cars, Rolls-Royce, Ferrari, Lamborghini, car detailing, car repair',
  icons: {
    icon: '/image/tingcar-logo-full.png',
  },
  openGraph: {
    title: 'TingCar - Luxury & Exotic Car Rental',
    description: 'Masterpiece in Motion. Where Luxury Meets Performance.',
    images: [
      {
        url: '/image/cover-facebook-tingcar.png',
        width: 1200,
        height: 630,
        alt: 'TingCar Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TingCar - Luxury & Exotic Car Rental',
    description: 'Masterpiece in Motion. Where Luxury Meets Performance.',
    images: ['/image/cover-x-tingcar.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          {children}
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
