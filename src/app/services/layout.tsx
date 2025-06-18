import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | TechFlow Solutions',
  description: 'Professionelle teknologiske løsninger der driver vækst og innovation for din virksomhed.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}