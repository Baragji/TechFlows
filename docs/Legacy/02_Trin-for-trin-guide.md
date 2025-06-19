# Trin-for-trin Implementeringsguide
*Detaljeret guide med kodeeksempler og implementeringsdetaljer*

## 🔍 ANALYSE AF EKSISTERENDE HJEMMESIDE

### Nuværende Struktur
- **Sider:** 6 hovedsider (index, about, blog, testimonials, prisberegner)
- **Navigation:** Responsiv med dropdown menu og mobile hamburger
- **Design:** Moderne glassmorphism med gradients og animationer
- **Funktionaliteter:** Interaktiv prisberegner, contact forms, scroll animations

### Teknisk Stack (Nuværende)
- **Frontend:** Vanilla HTML5, CSS3, JavaScript ES6+
- **Styling:** CSS Custom Properties, Flexbox, Grid
- **Fonts:** Inter fra Google Fonts
- **Farver:** Primær blå, sekundær grøn, accent orange

### Identificerede Udfordringer
1. **Vedligeholdelse:** Manuel opdatering af alle sider
2. **Performance:** Manglende optimering af billeder og kode
3. **SEO:** Begrænset struktureret data og meta-optimering
4. **Skalerbarhed:** Svært at tilføje nye funktioner

## 💻 KODEEKSEMPLER OG IMPLEMENTERING

### Prisberegner Komponent
```typescript
// src/components/PrisBeregner.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  projectType: z.enum(['website', 'webshop', 'app']),
  features: z.array(z.string()),
  timeline: z.enum(['rush', 'normal', 'flexible'])
})

type FormData = z.infer<typeof schema>

export default function PrisBeregner() {
  const [price, setPrice] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })
  
  const calculatePrice = (data: FormData) => {
    let basePrice = 0
    
    // Base price by project type
    switch (data.projectType) {
      case 'website':
        basePrice = 25000
        break
      case 'webshop':
        basePrice = 50000
        break
      case 'app':
        basePrice = 75000
        break
    }
    
    // Add feature costs
    const featureCosts = {
      'cms': 10000,
      'ecommerce': 20000,
      'analytics': 5000,
      'seo': 8000
    }
    
    const featureTotal = data.features.reduce((total, feature) => {
      return total + (featureCosts[feature] || 0)
    }, 0)
    
    // Timeline multiplier
    const timelineMultiplier = {
      'rush': 1.5,
      'normal': 1.0,
      'flexible': 0.8
    }
    
    const finalPrice = (basePrice + featureTotal) * timelineMultiplier[data.timeline]
    setPrice(finalPrice)
  }
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Prisberegner</h2>
      
      <form onSubmit={handleSubmit(calculatePrice)} className="space-y-6">
        {/* Project Type Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Projekttype</label>
          <select {...register('projectType')} className="w-full p-3 border rounded-lg">
            <option value="website">Hjemmeside</option>
            <option value="webshop">Webshop</option>
            <option value="app">Web App</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
          )}
        </div>
        
        {/* Features Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Funktioner</label>
          <div className="space-y-2">
            {['cms', 'ecommerce', 'analytics', 'seo'].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  value={feature}
                  {...register('features')}
                  className="mr-2"
                />
                <span className="capitalize">{feature}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Timeline Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Tidsramme</label>
          <div className="space-y-2">
            {[
              { value: 'rush', label: 'Hurtigt (2-4 uger)' },
              { value: 'normal', label: 'Normal (6-8 uger)' },
              { value: 'flexible', label: 'Fleksibel (10-12 uger)' }
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  value={option.value}
                  {...register('timeline')}
                  className="mr-2"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Beregn Pris
        </button>
      </form>
      
      {price > 0 && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Estimeret Pris</h3>
          <p className="text-2xl font-bold text-green-600">
            {price.toLocaleString('da-DK')} DKK
          </p>
        </div>
      )}
    </div>
  )
}
```

### Layout Komponent
```typescript
// src/components/layout/Layout.tsx
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

### API Route Eksempel
```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Navn skal være mindst 2 karakterer'),
  email: z.string().email('Ugyldig email adresse'),
  message: z.string().min(10, 'Besked skal være mindst 10 karakterer')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)
    
    // Send email logic here
    // await sendEmail(validatedData)
    
    return NextResponse.json(
      { message: 'Besked sendt succesfuldt' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Ugyldig data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Server fejl' },
      { status: 500 }
    )
  }
}
```

### TypeScript Interfaces
```typescript
// src/types/index.ts
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  url?: string
  github?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  projectType?: 'website' | 'webshop' | 'app' | 'other'
}
```

## 🚀 DEPLOYMENT KONFIGURATION

### Vercel Deployment
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://techflow-solutions.vercel.app"
  }
}
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "e2e": "playwright test"
  }
}
```