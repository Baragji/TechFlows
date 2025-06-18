'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CheckIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

interface ProjectType {
  id: string
  name: string
  basePrice: number
  description: string
  icon: string
}

interface Option {
  id: string
  name: string
  price: number
  description: string
}

interface Timeline {
  id: string
  name: string
  multiplier: number
  description: string
}

const projectTypes: ProjectType[] = [
  {
    id: 'website',
    name: 'Website',
    basePrice: 15000,
    description: 'Professionel hjemmeside med moderne design',
    icon: '🌐'
  },
  {
    id: 'webshop',
    name: 'Webshop',
    basePrice: 25000,
    description: 'E-commerce løsning med betalingsintegration',
    icon: '🛒'
  },
  {
    id: 'app',
    name: 'Mobil App',
    basePrice: 40000,
    description: 'Native eller hybrid mobilapplikation',
    icon: '📱'
  },
  {
    id: 'automation',
    name: 'Automatisering',
    basePrice: 20000,
    description: 'Forretningsprocesser og workflow automation',
    icon: '⚙️'
  }
]

const websiteOptions: Option[] = [
  { id: 'pages-5-10', name: '5-10 sider', price: 0, description: 'Standard antal sider' },
  { id: 'pages-11-20', name: '11-20 sider', price: 5000, description: 'Udvidet indhold' },
  { id: 'pages-21+', name: '21+ sider', price: 10000, description: 'Omfattende website' },
  { id: 'cms', name: 'CMS System', price: 8000, description: 'Rediger selv indhold' },
  { id: 'blog', name: 'Blog Funktionalitet', price: 5000, description: 'Integreret blog system' },
  { id: 'multilang', name: 'Flersproget', price: 7000, description: 'Flere sprog support' },
  { id: 'booking', name: 'Booking System', price: 12000, description: 'Online booking og kalender' }
]

const webshopOptions: Option[] = [
  { id: 'products-50', name: 'Op til 50 produkter', price: 0, description: 'Standard produktkatalog' },
  { id: 'products-200', name: 'Op til 200 produkter', price: 5000, description: 'Udvidet katalog' },
  { id: 'products-unlimited', name: 'Ubegrænset produkter', price: 10000, description: 'Ingen begrænsninger' },
  { id: 'inventory', name: 'Lagerstyring', price: 8000, description: 'Automatisk lageropdatering' },
  { id: 'multivendor', name: 'Multi-vendor', price: 15000, description: 'Flere sælgere på platformen' },
  { id: 'subscription', name: 'Abonnement', price: 12000, description: 'Recurring betalinger' }
]

const appOptions: Option[] = [
  { id: 'platform-ios', name: 'iOS', price: 0, description: 'iPhone og iPad' },
  { id: 'platform-android', name: 'Android', price: 5000, description: 'Android enheder' },
  { id: 'platform-both', name: 'Begge platforme', price: 15000, description: 'iOS og Android' },
  { id: 'backend', name: 'Backend API', price: 20000, description: 'Server og database' },
  { id: 'push', name: 'Push Notifikationer', price: 5000, description: 'Beskeder til brugere' },
  { id: 'offline', name: 'Offline Funktionalitet', price: 10000, description: 'Virker uden internet' }
]

const automationOptions: Option[] = [
  { id: 'complexity-simple', name: 'Simpel', price: 0, description: 'Grundlæggende automation' },
  { id: 'complexity-medium', name: 'Medium', price: 10000, description: 'Mellemkompleks løsning' },
  { id: 'complexity-complex', name: 'Kompleks', price: 25000, description: 'Avanceret automation' },
  { id: 'ai', name: 'AI Integration', price: 15000, description: 'Kunstig intelligens' },
  { id: 'reporting', name: 'Avanceret Rapportering', price: 8000, description: 'Detaljerede analyser' }
]

const timelines: Timeline[] = [
  {
    id: 'standard',
    name: 'Standard',
    multiplier: 1,
    description: '6-8 uger levering'
  },
  {
    id: 'rush',
    name: 'Rush',
    multiplier: 1.5,
    description: '3-4 uger levering'
  },
  {
    id: 'flexible',
    name: 'Fleksibel',
    multiplier: 0.9,
    description: '10-12 uger levering'
  }
]

export default function PriceCalculator() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard')
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const getCurrentOptions = (): Option[] => {
    switch (selectedProjectType) {
      case 'website': return websiteOptions
      case 'webshop': return webshopOptions
      case 'app': return appOptions
      case 'automation': return automationOptions
      default: return []
    }
  }

  const calculatePrice = () => {
    if (!selectedProjectType) {
      setTotalPrice(0)
      return
    }

    const projectType = projectTypes.find(p => p.id === selectedProjectType)
    if (!projectType) return

    let basePrice = projectType.basePrice
    let addonsPrice = 0

    const currentOptions = getCurrentOptions()
    selectedOptions.forEach(optionId => {
      const option = currentOptions.find(o => o.id === optionId)
      if (option) {
        addonsPrice += option.price
      }
    })

    const timeline = timelines.find(t => t.id === selectedTimeline)
    const timelineMultiplier = timeline?.multiplier || 1

    const total = (basePrice + addonsPrice) * timelineMultiplier
    setTotalPrice(Math.round(total))
  }

  useEffect(() => {
    calculatePrice()
  }, [selectedProjectType, selectedOptions, selectedTimeline])

  const handleProjectTypeChange = (projectTypeId: string) => {
    setSelectedProjectType(projectTypeId)
    setSelectedOptions([])
  }

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId)
      } else {
        return [...prev, optionId]
      }
    })
  }

  const resetCalculator = () => {
    setSelectedProjectType('')
    setSelectedOptions([])
    setSelectedTimeline('standard')
    setTotalPrice(0)
  }

  const getBasePrice = () => {
    const projectType = projectTypes.find(p => p.id === selectedProjectType)
    return projectType?.basePrice || 0
  }

  const getAddonsPrice = () => {
    const currentOptions = getCurrentOptions()
    return selectedOptions.reduce((total, optionId) => {
      const option = currentOptions.find(o => o.id === optionId)
      return total + (option?.price || 0)
    }, 0)
  }

  const getTimelineAdjustment = () => {
    const timeline = timelines.find(t => t.id === selectedTimeline)
    const multiplier = timeline?.multiplier || 1
    const baseAndAddons = getBasePrice() + getAddonsPrice()
    return Math.round(baseAndAddons * multiplier) - baseAndAddons
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Konfigurer Dit Projekt</h2>
                
                {/* Project Type Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Vælg Projekttype</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <motion.div
                        key={type.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          selectedProjectType === type.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => handleProjectTypeChange(type.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{type.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{type.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                            <p className="text-lg font-bold text-blue-600">
                              Fra {type.basePrice.toLocaleString('da-DK')} DKK
                            </p>
                          </div>
                          {selectedProjectType === type.id && (
                            <CheckIcon className="w-6 h-6 text-blue-500" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Options Selection */}
                {selectedProjectType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tilpasningsmuligheder</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {getCurrentOptions().map((option) => (
                        <div
                          key={option.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                            selectedOptions.includes(option.id)
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          onClick={() => handleOptionToggle(option.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{option.name}</h4>
                              <p className="text-sm text-gray-600">{option.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-blue-600">
                                {option.price > 0 ? `+${option.price.toLocaleString('da-DK')}` : 'Inkluderet'}
                              </span>
                              {selectedOptions.includes(option.id) && (
                                <CheckIcon className="w-5 h-5 text-blue-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Timeline Selection */}
                {selectedProjectType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Leveringstid</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {timelines.map((timeline) => (
                        <div
                          key={timeline.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                            selectedTimeline === timeline.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          onClick={() => setSelectedTimeline(timeline.id)}
                        >
                          <div className="text-center">
                            <h4 className="font-medium text-gray-900 mb-1">{timeline.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{timeline.description}</p>
                            <p className="text-sm font-semibold text-blue-600">
                              {timeline.multiplier === 1 ? 'Standard pris' : 
                               timeline.multiplier > 1 ? `+${Math.round((timeline.multiplier - 1) * 100)}%` :
                               `-${Math.round((1 - timeline.multiplier) * 100)}%`}
                            </p>
                            {selectedTimeline === timeline.id && (
                              <CheckIcon className="w-5 h-5 text-blue-500 mx-auto mt-2" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Prisestimering</h3>
                
                {selectedProjectType ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Grundpris</span>
                      <span className="font-semibold">{getBasePrice().toLocaleString('da-DK')} DKK</span>
                    </div>
                    
                    {getAddonsPrice() > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Tilvalg</span>
                        <span className="font-semibold">+{getAddonsPrice().toLocaleString('da-DK')} DKK</span>
                      </div>
                    )}
                    
                    {getTimelineAdjustment() !== 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Leveringstid</span>
                        <span className={`font-semibold ${
                          getTimelineAdjustment() > 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {getTimelineAdjustment() > 0 ? '+' : ''}{getTimelineAdjustment().toLocaleString('da-DK')} DKK
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {totalPrice.toLocaleString('da-DK')} DKK
                      </span>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>Bemærk:</strong> Dette er et estimat. Den endelige pris kan variere baseret på specifikke krav og kompleksitet.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center space-x-2">
                        <DocumentTextIcon className="w-5 h-5" />
                        <span>Få detaljeret tilbud</span>
                      </button>
                      
                      <button
                        onClick={resetCalculator}
                        className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-semibold flex items-center justify-center space-x-2"
                      >
                        <ArrowPathIcon className="w-5 h-5" />
                        <span>Start forfra</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 mx-auto mb-4 text-gray-300 flex items-center justify-center">
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M9 11h.01M12 11h.01M15 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p>Vælg en projekttype for at se prisestimering</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}