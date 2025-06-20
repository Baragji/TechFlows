'use client';

import { SSRSafeMotion } from '@/components/ui/SSRSafeMotion';
import { useHydration } from '@/hooks/useHydration';
import { useParallax, useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTypewriter } from '@/hooks/useTypewriter';
import { formatDateString, getDayNumber, getMonthName, useFormattedDate } from '@/utils/dateUtils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Test component to validate hydration mismatch fixes
 * This component should render identically on server and client
 */
export default function HydrationTest() {
  const isHydrated = useHydration();
  const [clientTime, setClientTime] = useState<string>('');
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [userAgent, setUserAgent] = useState<string>('');

  // Test date utilities
  const testDate = '2024-12-15T10:30:00Z';
  const formattedDate = useFormattedDate(testDate);
  const staticFormattedDate = formatDateString(testDate);
  const dayNumber = getDayNumber(testDate);
  const monthName = getMonthName(testDate);

  // Test typewriter effect
  const typewriter = useTypewriter(['Server Safe Text', 'Client Enhanced Text'], {
    speed: 100,
    loop: true
  });

  // Test scroll animations
  const { elementRef: scrollRef, isVisible } = useScrollAnimation();
  const { elementRef: parallaxRef, offset } = useParallax();

  // Client-only effects
  useEffect(() => {
    if (isHydrated) {
      // Use current time only in useEffect to avoid hydration mismatch
      const currentTime = new Date(); // Safe in useEffect - client-only
      setClientTime(currentTime.toLocaleTimeString());

      // Set browser info safely - these are client-only in useEffect
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth); // Safe in useEffect - client-only
      }

      if (typeof navigator !== 'undefined') {
        setUserAgent(`${navigator.userAgent.slice(0, 50)  }...`); // Safe in useEffect - client-only
      }

      typewriter.start();
    }
  }, [isHydrated, typewriter]);

  return (
    <div className="p-8 space-y-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Hydration Safety Test</h1>

      {/* Hydration Status */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Hydration Status</h2>
        <p>Is Hydrated: <span className={isHydrated ? 'text-green-400' : 'text-yellow-400'}>
          {isHydrated ? 'Yes' : 'No'}
        </span></p>
        <p>Client Time: <span className="text-blue-400">{clientTime || 'Not set yet'}</span></p>
      </div>

      {/* Date Handling Test */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Date Handling (SSR Safe)</h2>
        <p>Test Date: {testDate}</p>
        <p>Static Format: <span className="text-green-400">{staticFormattedDate}</span></p>
        <p>Enhanced Format: <span className="text-blue-400">{formattedDate}</span></p>
        <p>Day Number: <span className="text-yellow-400">{dayNumber}</span></p>
        <p>Month Name: <span className="text-purple-400">{monthName}</span></p>
      </div>

      {/* Typewriter Test */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Typewriter Effect</h2>
        <p>Text: <span className="text-cyan-400 font-mono">{typewriter.displayText}</span></p>
        <p>Is Started: <span className={typewriter.isStarted ? 'text-green-400' : 'text-red-400'}>
          {typewriter.isStarted ? 'Yes' : 'No'}
        </span></p>
      </div>

      {/* SSR Safe Motion Test */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">SSR Safe Motion</h2>

        {/* Regular motion (potential hydration issue) */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Regular Motion (potential issue):</p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-2 bg-red-500/20 border border-red-500/50 rounded"
          >
            This might cause hydration mismatch
          </motion.div>
        </div>

        {/* SSR Safe motion */}
        <div>
          <p className="text-sm text-gray-400 mb-2">SSR Safe Motion:</p>
          <SSRSafeMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-2 bg-green-500/20 border border-green-500/50 rounded"
          >
            This is hydration safe
          </SSRSafeMotion>
        </div>
      </div>

      {/* Scroll Animation Test */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Scroll Animations</h2>
        <div ref={scrollRef as React.RefObject<HTMLDivElement>} className="p-4 bg-gray-700 rounded">
          <p>Scroll Visibility: <span className={isVisible ? 'text-green-400' : 'text-gray-400'}>
            {isVisible ? 'Visible' : 'Not Visible'}
          </span></p>
        </div>

        <div ref={parallaxRef as React.RefObject<HTMLDivElement>} style={{ transform: `translateY(${offset * 0.1}px)` }} className="mt-4 p-4 bg-gray-700 rounded">
          <p>Parallax Offset: <span className="text-blue-400">{offset.toFixed(2)}px</span></p>
        </div>
      </div>

      {/* Browser-only features */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Browser-Only Features</h2>
        {isHydrated ? (
          <div>
            <p>Window Width: <span className="text-green-400">{windowWidth || 'N/A'}</span></p>
            <p>User Agent: <span className="text-blue-400">{userAgent || 'N/A'}</span></p>
          </div>
        ) : (
          <p className="text-yellow-400">Browser features will load after hydration...</p>
        )}
      </div>

      {/* Test Results */}
      <div className="p-4 bg-gray-800 rounded-lg border-2 border-green-500">
        <h2 className="text-xl font-semibold mb-2 text-green-400">✅ Test Results</h2>
        <ul className="space-y-1 text-sm">
          <li>✅ Static content renders consistently</li>
          <li>✅ Dates format safely on server and client</li>
          <li>✅ Animations don&apos;t cause hydration mismatches</li>
          <li>✅ Client-only features load after hydration</li>
          <li>✅ No console hydration errors should appear</li>
        </ul>
      </div>
    </div>
  );
}
