'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Klar til at komme i gang?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Kontakt os i dag for en gratis konsultation og få et skræddersyet tilbud til dit projekt.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Få et tilbud
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="tel:+4512345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Ring nu
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100"
          >
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <span>+45 12 34 56 78</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              <span>kontakt@techflow.dk</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}