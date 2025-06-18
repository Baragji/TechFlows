'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-obsidian-950 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Fejl</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Der opstod en uventet fejl
        </h2>
        <p className="text-white/70 mb-8">
          Beklager, men der opstod en teknisk fejl. Prøv venligst igen.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
        >
          Prøv igen
        </button>
      </div>
    </div>
  );
}