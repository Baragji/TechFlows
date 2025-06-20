'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function TestimonialsCTA() {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klar til at Starte Dit Næste Projekt?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bliv en del af vores voksende familie af tilfredse kunder. Lad os hjælpe dig med at
              realisere dine digitale ambitioner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Free Consultation */}
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">Gratis Konsultation</h3>
              <p className="text-gray-300 text-sm">30 minutters gratis rådgivning om dit projekt</p>
            </div>

            {/* Fast Response */}
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <PhoneIcon className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">Hurtig Respons</h3>
              <p className="text-gray-300 text-sm">
                Vi svarer inden for 24 timer på alle henvendelser
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <ArrowRightIcon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">Skræddersyede Løsninger</h3>
              <p className="text-gray-300 text-sm">Hver løsning tilpasses dine specifikke behov</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>Få et Gratis Tilbud</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="tel:+4512345678"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-text-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Ring Nu: +45 12 34 56 78</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-gray-400 text-sm mb-4">Betroet af 120+ virksomheder i Danmark</p>
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="text-xs">✓ 5 års erfaring</div>
              <div className="text-xs">✓ 98% kundetilfredshed</div>
              <div className="text-xs">✓ 24/7 support</div>
              <div className="text-xs">✓ Pengene tilbage garanti</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
}
