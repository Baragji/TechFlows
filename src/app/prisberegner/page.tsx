import type { Metadata } from 'next'
import PriceCalculatorHero from '@/components/sections/PriceCalculatorHero'
import PriceCalculator from '@/components/sections/PriceCalculator'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Prisberegner | TechFlow Solutions',
  description: 'Beregn prisen på dit næste webprojekt med vores interaktive prisberegner. Få et øjeblikkeligt estimat på websites, webshops, apps og automatiseringsløsninger.',
  keywords: 'prisberegner, website pris, webshop pris, app udvikling pris, automatisering pris, web udvikling Danmark',
}

export default function PrisberegnerPage() {
  return (
    <main>
      <PriceCalculatorHero />
      <PriceCalculator />
      <ContactCTA />
    </main>
  )
}