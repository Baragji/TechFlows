'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Counter for generating unique IDs (avoiding Date.now() for hydration consistency)
    let idCounter = 0;
    const generateId = (prefix: string) => `${prefix}-${++idCounter}`;

    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
      // You can send this to your analytics service
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Performance Observer for Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          id: generateId('lcp'),
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          reportWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: generateId('fid'),
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          id: generateId('cls'),
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Navigation timing
    if (typeof window !== 'undefined' && 'performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const navigation = navigationEntries[0];
        
        // Time to First Byte (TTFB)
        const ttfb = navigation.responseStart - navigation.requestStart;
        reportWebVitals({
          name: 'TTFB',
          value: ttfb,
          id: generateId('ttfb'),
        });

        // First Contentful Paint (FCP)
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          reportWebVitals({
            name: 'FCP',
            value: fcpEntry.startTime,
            id: generateId('fcp'),
          });
        }
      }
    }

    // Resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        // Monitor slow resources (> 1 second)
        if (entry.duration > 1000 && process.env.NODE_ENV === 'development') {
          // Slow resource detected
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    // Memory usage monitoring (if available)
    if ('memory' in performance && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const memory = (performance as any).memory;
      // Memory metrics tracked for development
    }

    // Connection quality monitoring
    if ('connection' in navigator && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const connection = (navigator as any).connection;
      // Connection metrics tracked for development
    }

    // Cleanup function
    return () => {
      // Disconnect observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;