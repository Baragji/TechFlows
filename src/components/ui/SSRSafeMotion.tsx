'use client';

import { useHydration } from '@/hooks/useHydration';
import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';

// Define common motion component props
interface SSRSafeMotionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  as?: keyof typeof motion;
  fallbackClassName?: string;
  [key: string]: any;
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

  // Create the motion component dynamically
  const MotionComponent = motion[as] as any;

  if (!isHydrated) {
    // During SSR and initial render, use a regular element
    const StaticComponent = as as keyof JSX.IntrinsicElements;
    return (
      <StaticComponent
        className={`${fallbackClassName} ${className}`.trim()}
        {...(props as HTMLAttributes<HTMLElement>)}
      >
        {children}
      </StaticComponent>
    );
  }

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
