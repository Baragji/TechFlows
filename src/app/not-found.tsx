import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-950 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Siden blev ikke fundet
        </h2>
        <p className="text-white/70 mb-8">
          Beklager, men den side du leder efter eksisterer ikke eller er blevet flyttet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
        >
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
}