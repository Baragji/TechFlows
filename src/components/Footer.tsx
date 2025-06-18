import Link from 'next/link';
import { FooterProps } from '@/types/navigation';

const Footer: React.FC<FooterProps> = ({ sections, contactInfo, companyName, tagline, year }) => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-text-light mb-4">{tagline}</p>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              {section.content && <p className="text-text-light mb-4">{section.content}</p>}
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-text-light hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="text-text-light space-y-2">
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light text-sm">
              &copy; {year} {companyName}. Alle rettigheder forbeholdes.
            </p>

            {/* Optional: Social Links or Additional Links */}
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">{/* Add social media links here if needed */}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
