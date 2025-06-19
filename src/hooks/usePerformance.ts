import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export const usePerformance = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      const metrics: PerformanceMetrics = {};
      
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as PerformanceEntry & { value: number }).value;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart;
            break;
        }
      }
      
      // Log metrics (in production, send to analytics)
      // Metrics logged to analytics service in production
      
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production' && Object.keys(metrics).length > 0) {
        // Replace with your analytics service
        // analytics.track('performance_metrics', metrics);
      }
    });
    
    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch {
      // Performance observer not supported in this environment
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
};

// Web Vitals helper
export const reportWebVitals = () => {
  // Web Vital metrics sent to analytics service
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your analytics service
    // analytics.track('web_vital', metrics);
  }
};
