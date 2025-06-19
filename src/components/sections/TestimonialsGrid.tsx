'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lars Nielsen',
    position: 'CEO',
    company: 'Nielsen & Co',
    content:
      'TechFlow Solutions leverede en fantastisk hjemmeside der overgik alle vores forventninger. Deres professionelle tilgang og tekniske ekspertise er i verdensklasse.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '2',
    name: 'Maria Andersen',
    position: 'Marketing Director',
    company: 'Green Solutions ApS',
    content:
      'Vi fik en moderne og brugervenlig webshop der har øget vores online salg med 150%. Teamet var utrolig hjælpsomt gennem hele processen.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '3',
    name: 'Sophie Nielsen',
    position: 'Founder',
    company: 'Creative Studio',
    content:
      'Deres kreative tilgang og tekniske kunnen resulterede i en hjemmeside der perfekt repræsenterer vores brand. Highly recommended!',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '4',
    name: 'Michael Petersen',
    position: 'Operations Manager',
    company: 'Logistics Pro',
    content:
      'Automatiseringsløsningen fra TechFlow har revolutioneret vores arbejdsprocesser. Vi sparer nu 20 timer om ugen på manuelle opgaver.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '5',
    name: 'Anna Kristensen',
    position: 'CEO',
    company: 'Health & Wellness',
    content:
      'Vores mobile app blev udviklet til perfektion. Brugervenligheden og designet har fået fantastiske anmeldelser fra vores kunder.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '6',
    name: 'Thomas Møller',
    position: 'IT Director',
    company: 'Tech Innovations',
    content:
      'Professionel service fra start til slut. TechFlow Solutions forstår virkelig hvordan man leverer kvalitet til tiden og inden for budget.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hvad Siger Vores Kunder</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Læs erfaringerne fra virksomheder der har valgt os som deres teknologipartner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-blue-100 absolute -top-4 -left-2 font-serif">
                  &ldquo;
                </div>
                <p className="text-gray-700 leading-relaxed relative z-10">{testimonial.content}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <Image src="" alt="" width={800} height={600} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <div className="flex items-center space-x-1 text-sm text-blue-600">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vil du også være en del af vores succeshistorier?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontakt os i dag og lad os hjælpe dig med at realisere dit næste projekt
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium inline-block"
            >
              Få et tilbud
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
