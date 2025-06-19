'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to safely detect when hydration is complete
 * Returns false during SSR and initial render, true after hydration
 */
export const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

/**
 * Hook to safely detect if we're in the browser
 * More reliable than typeof window checks
 */
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export default useHydration;
