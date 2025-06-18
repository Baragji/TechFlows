import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TechFlow Solutions - Innovative teknologiløsninger til moderne virksomheder',
  description:
    'Moderne teknologivirksomhed specialiseret i udvikling af apps, hjemmesider og automatisering af arbejdsprocesser. Innovative løsninger der skaber værdi.',
  keywords:
    'teknologiløsninger, hjemmesideudvikling, app udvikling, automatisering, workflows, webshop, innovation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
