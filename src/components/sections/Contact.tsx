'use client';

import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { useForm } from '@/hooks/useForm';
import { useNotification } from '@/hooks/useNotification';

const Contact = () => {
  const { NotificationContainer } = useNotification();

  const {
    getValue,
    getError,
    isTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    },
    validationRules: {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      message: { required: true, minLength: 10 },
    },
    onSubmit: async (data) => {
      // Simuler API kald
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // I produktion ville dette være et rigtigt API kald:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      console.log('Form submitted:', data);
      resetForm();
    },
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Lad os tale sammen</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Klar til at tage næste skridt? Kontakt os i dag
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-6">Kontakt information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Email</h4>
                    <a
                      href="mailto:kontakt@techflowsolutions.dk"
                      className="text-accent hover:text-hover transition-colors duration-300"
                    >
                      kontakt@techflowsolutions.dk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Telefon</h4>
                    <a
                      href="tel:+4512345678"
                      className="text-secondary hover:text-secondary/80 transition-colors duration-300"
                    >
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Adresse</h4>
                    <p className="text-text-light">
                      Teknologivej 1<br />
                      2800 Kongens Lyngby
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={getValue('name')}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 ${
                      getError('name') && isTouched('name') ? 'border-red-300' : 'border-border'
                    }`}
                    placeholder="Dit navn"
                  />
                  {getError('name') && isTouched('name') && (
                    <p className="mt-1 text-sm text-red-500">{getError('name')}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={getValue('email')}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 ${
                      getError('email') && isTouched('email') ? 'border-red-300' : 'border-border'
                    }`}
                    placeholder="din@email.dk"
                  />
                  {getError('email') && isTouched('email') && (
                    <p className="mt-1 text-sm text-red-500">{getError('email')}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Virksomhed
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={getValue('company')}
                    onChange={handleChange}
                    onBlur={() => handleBlur('company')}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
                    placeholder="Din virksomhed"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Interesseret i
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={getValue('service')}
                    onChange={handleChange}
                    onBlur={() => handleBlur('service')}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
                  >
                    <option value="">Vælg service</option>
                    <option value="hjemmeside">Hjemmesideudvikling</option>
                    <option value="webshop">Webshopudvikling</option>
                    <option value="app">App-udvikling</option>
                    <option value="automatisering">Automatisering</option>
                    <option value="andet">Andet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                  Besked *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={getValue('message')}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 resize-none ${
                    getError('message') && isTouched('message') ? 'border-red-300' : 'border-border'
                  }`}
                  placeholder="Fortæl os om dit projekt..."
                />
                {getError('message') && isTouched('message') && (
                  <p className="mt-1 text-sm text-red-500">{getError('message')}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg hover:bg-hover focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sender...
                  </>
                ) : (
                  <>
                    Send besked
                    <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
            <NotificationContainer />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
