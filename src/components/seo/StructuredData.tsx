'use client';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'Event' | 'Service' | 'LocalBusiness';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Add specific structured data based on type
    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: data.name || 'TechFlow Solutions',
          url: data.url || 'https://techflow.dk',
          logo: data.logo || 'https://techflow.dk/logo.png',
          description: data.description || 'Innovative teknologiløsninger til moderne virksomheder',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Vesterbrogade 123',
            addressLocality: 'København',
            postalCode: '1620',
            addressCountry: 'DK'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+45-12-34-56-78',
            contactType: 'customer service',
            availableLanguage: ['Danish', 'English']
          },
          sameAs: [
            'https://linkedin.com/company/techflow-solutions',
            'https://twitter.com/techflowdk'
          ]
        };

      case 'WebSite':
        return {
          ...baseData,
          name: data.name || 'TechFlow Solutions',
          url: data.url || 'https://techflow.dk',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://techflow.dk/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'Article':
        return {
          ...baseData,
          headline: data.headline,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author || 'TechFlow Solutions'
          },
          publisher: {
            '@type': 'Organization',
            name: 'TechFlow Solutions',
            logo: {
              '@type': 'ImageObject',
              url: 'https://techflow.dk/logo.png'
            }
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished
        };

      case 'Event':
        return {
          ...baseData,
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          eventAttendanceMode: data.eventAttendanceMode || 'https://schema.org/OnlineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: data.location || {
            '@type': 'VirtualLocation',
            url: 'https://techflow.dk/events'
          },
          image: data.image,
          description: data.description,
          organizer: {
            '@type': 'Organization',
            name: 'TechFlow Solutions',
            url: 'https://techflow.dk'
          },
          offers: data.offers || {
            '@type': 'Offer',
            url: data.url,
            price: data.price || '0',
            priceCurrency: 'DKK',
            availability: 'https://schema.org/InStock'
          }
        };

      case 'Service':
        return {
          ...baseData,
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'Organization',
            name: 'TechFlow Solutions'
          },
          areaServed: {
            '@type': 'Country',
            name: 'Denmark'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Technology Services',
            itemListElement: data.services || []
          }
        };

      case 'LocalBusiness':
        return {
          ...baseData,
          name: 'TechFlow Solutions',
          image: 'https://techflow.dk/logo.png',
          '@id': 'https://techflow.dk',
          url: 'https://techflow.dk',
          telephone: '+45-12-34-56-78',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Vesterbrogade 123',
            addressLocality: 'København',
            postalCode: '1620',
            addressCountry: 'DK'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 55.6761,
            longitude: 12.5683
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday', 
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '17:00'
          }
        };

      default:
        return baseData;
    }
  };

  const structuredData = generateStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default StructuredData;