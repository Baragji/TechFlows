'use client';

import { Container } from '@/components/ui';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Container className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Fejl</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Der opstod en uventet fejl
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Beklager, men der opstod en teknisk fejl. Prøv venligst igen.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Prøv igen
            </button>
          </div>
        </Container>
      </body>
    </html>
  );
}