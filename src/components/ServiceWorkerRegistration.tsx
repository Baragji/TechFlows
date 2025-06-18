'use client';

import { useEffect } from 'react';

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    // Only register service worker in production
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          console.log('Service Worker registered successfully:', registration);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  if (confirm('Ny version tilgængelig. Vil du opdatere?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      registerSW();

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.payload);
        }
      });

      // Handle online/offline status
      const handleOnline = () => {
        console.log('App is online');
        // You could show a notification here
      };

      const handleOffline = () => {
        console.log('App is offline');
        // You could show an offline banner here
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ServiceWorkerRegistration;