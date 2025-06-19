import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta?: number;
  entries?: PerformanceEntry[];
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
            metrics.fid = (entry as FirstInputEntry).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as LayoutShiftEntry).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as LayoutShiftEntry).value;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart;
            break;
        }
      }
      
      // Log metrics (in production, send to analytics)
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance Metrics:', metrics);
      }
      
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production' && Object.keys(metrics).length > 0) {
        // Replace with your analytics service
        // analytics.track('performance_metrics', metrics);
      }
    });
    
    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Performance observer not supported:', error);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
};

// Web Vitals helper
export const reportWebVitals = (metric: WebVitalMetric) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('Web Vital:', metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your analytics service
    // analytics.track('web_vital', {
    //   name: metric.name,
    //   value: metric.value,
    //   id: metric.id,
    // });
  }
};
