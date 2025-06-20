import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Vedligeholdelse | TechFlow Solutions',
  description: 'Professionel vedligeholdelse af websites og webapplikationer.',
};

export default function VedligeholdelsePage() {
  return (
    <div className="min-h-screen bg-obsidian-darker py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Website Vedligeholdelse
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Professionel vedligeholdelse af websites og webapplikationer.
          </p>
          <p className="text-white/60 mb-8">
            Denne side er under udvikling. Kontakt os for mere information om vores vedligeholdelse tjenester.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/80 transition-colors"
          >
            Kontakt os
          </Link>
        </div>
      </div>
    </div>
  );
}
