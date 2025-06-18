'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
      // You can send this to your analytics service
      console.log('Web Vital:', metric);
      
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
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'lcp-' + Date.now(),
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
            id: 'fid-' + Date.now(),
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
          id: 'cls-' + Date.now(),
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Navigation timing
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const navigation = navigationEntries[0];
        
        // Time to First Byte (TTFB)
        const ttfb = navigation.responseStart - navigation.requestStart;
        reportWebVitals({
          name: 'TTFB',
          value: ttfb,
          id: 'ttfb-' + Date.now(),
        });

        // First Contentful Paint (FCP)
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          reportWebVitals({
            name: 'FCP',
            value: fcpEntry.startTime,
            id: 'fcp-' + Date.now(),
          });
        }
      }
    }

    // Resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        // Monitor slow resources (> 1 second)
        if (entry.duration > 1000) {
          console.warn('Slow resource detected:', {
            name: entry.name,
            duration: entry.duration,
            size: entry.transferSize,
          });
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    // Memory usage monitoring (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
      });
    }

    // Connection quality monitoring
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      console.log('Connection info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      });
    }

    // Cleanup function
    return () => {
      // Disconnect observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;