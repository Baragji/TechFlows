'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Stat {
  id: string
  value: number
  suffix: string
  label: string
  icon: string
}

const stats: Stat[] = [
  {
    id: '1',
    value: 98,
    suffix: '%',
    label: 'Kundetilfredshed',
    icon: '😊'
  },
  {
    id: '2',
    value: 150,
    suffix: '+',
    label: 'Projekter Leveret',
    icon: '🚀'
  },
  {
    id: '3',
    value: 120,
    suffix: '+',
    label: 'Tilfredse Kunder',
    icon: '👥'
  },
  {
    id: '4',
    value: 24,
    suffix: '/7',
    label: 'Support Timer',
    icon: '🛠️'
  }
]

interface CounterProps {
  end: number
  duration?: number
}

function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span>{count}</span>
}

export default function TestimonialsStats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Vores Resultater Taler for Sig Selv
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tal der viser vores engagement i at levere exceptionelle resultater
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <Counter end={stat.value} />
                  <span className="text-blue-200">{stat.suffix}</span>
                </div>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Kvalitet og Tillid i Hver Detalje
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Vores høje kundetilfredshed og succesrate afspejler vores dedikation til at levere 
              innovative løsninger der overgår forventningerne. Vi bygger ikke bare websites og apps - 
              vi skaber digitale oplevelser der driver vækst og succes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}