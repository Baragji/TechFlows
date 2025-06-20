'use client';

import { useHydration } from '@/hooks/useHydration';
import { motion, MotionProps } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

// Define common motion component props
interface SSRSafeMotionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  as?: ElementType;
  fallbackClassName?: string;
  // Allow additional HTML attributes
  [key: string]: unknown;
}

/**
 * SSR-safe motion wrapper that prevents hydration mismatches
 * Renders as a regular div during SSR, then enhances with motion after hydration
 */
export const SSRSafeMotion = ({
  children,
  as = 'div',
  fallbackClassName = '',
  className = '',
  initial,
  animate,
  whileInView,
  whileHover,
  whileTap,
  transition,
  viewport,
  ...props
}: SSRSafeMotionProps) => {
  const isHydrated = useHydration();

  if (!isHydrated) {
    // During SSR and initial render, use a regular element
    const StaticComponent = as as ElementType;
    return (
      <StaticComponent
        className={`${fallbackClassName} ${className}`.trim()}
        {...props}
      >
        {children}
      </StaticComponent>
    );
  }

  // Create the motion component dynamically after hydration
  const MotionComponent = motion[as as keyof typeof motion] as ElementType;

  // After hydration, use the full motion component
  return (
    <MotionComponent
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Specific wrappers for common use cases
export const SSRSafeMotionDiv = (props: SSRSafeMotionProps) => (
  <SSRSafeMotion as="div" {...props} />
);

export const SSRSafeMotionSection = (props: SSRSafeMotionProps) => (
  <SSRSafeMotion as="section" {...props} />
);

export const SSRSafeMotionArticle = (props: SSRSafeMotionProps) => (
  <SSRSafeMotion as="article" {...props} />
);

export const SSRSafeMotionForm = (props: SSRSafeMotionProps) => (
  <SSRSafeMotion as="form" {...props} />
);

export default SSRSafeMotion;
