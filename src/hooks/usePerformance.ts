import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export const usePerformance = (): void => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }
    
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
          case 'first-input': {
            const firstInputEntry = entry as FirstInputEntry;
            metrics.fid = firstInputEntry.processingStart - firstInputEntry.startTime;
            break;
          }
          case 'layout-shift': {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + layoutShiftEntry.value;
            }
            break;
          }
          case 'navigation':
            metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart;
            break;
        }
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
    } catch {
      // Performance observer not supported - silently fail
      // This is expected in some environments
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
};

// Web Vitals helper
export const reportWebVitals = (_metric: WebVitalMetric): void => {
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
