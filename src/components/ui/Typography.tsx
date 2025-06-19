import React from 'react';
import type { JSX } from 'react/jsx-runtime';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | 'display'
    | 'hero'
    | 'hero-sm'
    | 'section'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body-lg'
    | 'body'
    | 'caption';
  as?: keyof JSX.IntrinsicElements;
  gradient?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as, gradient = false, children, ...props }, ref) => {
    const variants = {
      display: 'text-display font-extrabold text-text-dark',
      hero: 'text-hero font-bold text-text-dark',
      'hero-sm': 'text-hero-sm font-bold text-text-dark',
      section: 'text-section font-semibold text-text-dark',
      h1: 'text-4xl font-light italic text-text-dark',
      h2: 'text-3xl font-semibold text-text-dark',
      h3: 'text-2xl font-semibold text-text-dark',
      h4: 'text-xl font-medium text-text-dark',
      'body-lg': 'text-body-lg text-text-light',
      body: 'text-body text-text-light',
      caption: 'text-caption text-text-light',
    };

    const defaultElements = {
      display: 'h1',
      hero: 'h1',
      'hero-sm': 'h1',
      section: 'h2',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      'body-lg': 'p',
      body: 'p',
      caption: 'span',
    };

    const Component = as || defaultElements[variant] || 'p';

    const gradientClass = gradient
      ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-clip-text text-transparent'
      : '';

    return React.createElement(
      Component,
      {
        ref,
        className: cn(variants[variant], gradientClass, className),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const Display = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="display" {...props} />
);

export const Hero = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="hero" {...props} />
);

export const HeroSm = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="hero-sm" {...props} />
);

export const Section = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="section" {...props} />
);

export const BodyLarge = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body-lg" {...props} />
);

export const Body = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export { Typography };
