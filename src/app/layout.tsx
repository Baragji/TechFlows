import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import PerformanceMonitor from '@/components/analytics/PerformanceMonitor';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'TechFlow Solutions - Innovative teknologiløsninger til moderne virksomheder',
  description:
    'Moderne teknologivirksomhed specialiseret i udvikling af apps, hjemmesider og automatisering af arbejdsprocesser. Innovative løsninger der skaber værdi.',
  keywords:
    'teknologiløsninger, hjemmesideudvikling, app udvikling, automatisering, workflows, webshop, innovation',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TechFlow Solutions',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'TechFlow Solutions',
    title: 'TechFlow Solutions - Innovative teknologiløsninger',
    description: 'Moderne teknologivirksomhed specialiseret i udvikling af apps, hjemmesider og automatisering.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow Solutions - Innovative teknologiløsninger',
    description: 'Moderne teknologivirksomhed specialiseret i udvikling af apps, hjemmesider og automatisering.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="bg-obsidian-dark">
      <body className={`${inter.variable} font-sans antialiased bg-obsidian-dark`}>
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
