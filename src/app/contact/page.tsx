import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Kontakt | TechFlow Solutions',
  description: 'Kontakt TechFlow Solutions for professionel webudvikling, app udvikling og digitale løsninger. Vi er klar til at hjælpe dig med dit næste projekt.',
  keywords: 'kontakt, TechFlow Solutions, webudvikling, app udvikling, digitale løsninger',
  openGraph: {
    title: 'Kontakt | TechFlow Solutions',
    description: 'Kontakt TechFlow Solutions for professionel webudvikling, app udvikling og digitale løsninger.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-obsidian-dark">
      <div className="pt-20">
        <Contact />
      </div>
    </main>
  )
}