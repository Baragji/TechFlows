'use client';

import { useHydration } from '@/hooks/useHydration';
import { useEffect, useState } from 'react';

// Server-safe date formatter that prevents hydration errors
export const formatDateString = (dateString: string, format: 'short' | 'medium' | 'long' = 'medium'): string => {
  try {
    const date = new Date(dateString);

    // Validate date
    if (isNaN(date.getTime())) {
      return dateString;
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Consistent formatting between server and client
    switch (format) {
      case 'short':
        return `${day}/${month}`;
      case 'long':
        return `${day}/${month}/${year}`;
      case 'medium':
      default:
        return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// Get month name in a server-safe way
export const getMonthName = (dateString: string, _locale: string = 'da-DK'): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return '';
    }

    // Danish month names for consistent SSR
    const danishMonths = [
      'jan', 'feb', 'mar', 'apr', 'maj', 'jun',
      'jul', 'aug', 'sep', 'okt', 'nov', 'dec'
    ];

    return danishMonths[date.getMonth()] || '';
  } catch (error) {
    console.error('Error getting month name:', error);
    return '';
  }
};

// Get day number in a server-safe way
export const getDayNumber = (dateString: string): number => {
  try {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 0 : date.getDate();
  } catch (error) {
    console.error('Error getting day number:', error);
    return 0;
  }
};

// Hook for enhanced client-side date formatting (progressive enhancement)
export const useFormattedDate = (
  dateString: string,
  options?: Intl.DateTimeFormatOptions,
  fallbackFormat: 'short' | 'medium' | 'long' = 'medium'
) => {
  const isHydrated = useHydration();
  const [enhancedDate, setEnhancedDate] = useState<string>('');

  // Always return the server-safe version initially
  const fallbackDate = formatDateString(dateString, fallbackFormat);

  useEffect(() => {
    if (!isHydrated) {return;}

    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const formatted = date.toLocaleDateString('da-DK', options);
        setEnhancedDate(formatted);
      }
    } catch (error) {
      console.error('Error formatting date:', error);
      setEnhancedDate(fallbackDate);
    }
  }, [dateString, options, isHydrated, fallbackDate]);

  // Return fallback during SSR, enhanced version after hydration
  return isHydrated && enhancedDate ? enhancedDate : fallbackDate;
};

// Hook for month name with progressive enhancement
export const useMonthName = (dateString: string) => {
  const isHydrated = useHydration();
  const [enhancedMonth, setEnhancedMonth] = useState<string>('');

  // Always return the server-safe version initially
  const fallbackMonth = getMonthName(dateString);

  useEffect(() => {
    if (!isHydrated) {return;}

    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const formatted = date.toLocaleDateString('da-DK', { month: 'short' });
        setEnhancedMonth(formatted);
      }
    } catch (error) {
      console.error('Error getting enhanced month name:', error);
      setEnhancedMonth(fallbackMonth);
    }
  }, [dateString, isHydrated, fallbackMonth]);

  // Return fallback during SSR, enhanced version after hydration
  return isHydrated && enhancedMonth ? enhancedMonth : fallbackMonth;
};

// Utility to check if a date is valid
export const isValidDate = (dateString: string): boolean => {
  try {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  } catch {
    return false;
  }
};

// Format relative time (e.g., "2 days ago") in a server-safe way
export const getRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {return 'I dag';}
    if (diffInDays === 1) {return 'I går';}
    if (diffInDays < 7) {return `${diffInDays} dage siden`;}
    if (diffInDays < 30) {return `${Math.floor(diffInDays / 7)} uger siden`;}

    return formatDateString(dateString);
  } catch (error) {
    console.error('Error calculating relative time:', error);
    return formatDateString(dateString);
  }
};
