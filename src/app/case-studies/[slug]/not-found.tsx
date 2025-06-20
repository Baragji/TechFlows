import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-950 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-glass-light rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Case Study Ikke Fundet</h1>
          <p className="text-white/70 mb-8">
            Den case study du leder efter eksisterer ikke eller er blevet flyttet.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Tilbage til Case Studies
          </Link>

          <div className="text-center">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              Eller gå til forsiden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
