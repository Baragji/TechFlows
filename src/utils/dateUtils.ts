'use client';

import { useState, useEffect } from 'react';

// Server-safe date formatter that prevents hydration errors
export const formatDateString = (dateString: string, _format: 'short' | 'medium' | 'long' = 'medium'): string => {
  // Default formatting that works on both server and client
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Simple formatting that's consistent between server and client
  return `${day}/${month}/${year}`;
}

// Hook for client-side date formatting
export const useFormattedDate = (dateString: string, options?: Intl.DateTimeFormatOptions) => {
  const [formattedDate, setFormattedDate] = useState<string>('');
  
  useEffect(() => {
    try {
      const date = new Date(dateString);
      setFormattedDate(date.toLocaleDateString('da-DK', options));
    } catch (error) {
      console.error('Error formatting date:', error);
      setFormattedDate(dateString);
    }
  }, [dateString, options]);
  
  return formattedDate || formatDateString(dateString);
};

// Hook for month name
export const useMonthName = (dateString: string) => {
  const [monthName, setMonthName] = useState<string>('');
  
  useEffect(() => {
    try {
      const date = new Date(dateString);
      setMonthName(date.toLocaleDateString('da-DK', { month: 'short' }));
    } catch (error) {
      console.error('Error getting month name:', error);
      setMonthName('');
    }
  }, [dateString]);
  
  return monthName || '';
};
