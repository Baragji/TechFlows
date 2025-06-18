import Link from 'next/link';
import { Container } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-dark mb-4">
          Siden blev ikke fundet
        </h2>
        <p className="text-text-light mb-8 max-w-md mx-auto">
          Beklager, men den side du leder efter eksisterer ikke eller er blevet flyttet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Tilbage til forsiden
        </Link>
      </div>
    </Container>
  );
}