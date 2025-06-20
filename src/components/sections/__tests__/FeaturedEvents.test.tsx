/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'
import FeaturedEvents from '../FeaturedEvents'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    article: ({ children, ...props }: React.ComponentProps<'article'>) => <article {...props}>{children}</article>,
    a: ({ children, ...props }: React.ComponentProps<'a'>) => <a {...props}>{children}</a>,
    svg: ({ children, ...props }: React.ComponentProps<'svg'>) => <svg {...props}>{children}</svg>
  }
}))

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: React.ComponentProps<'img'>) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src || "/images/events/default-event.svg"} alt={alt || "Event billede"} {...props} />
  }
})

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: React.ComponentProps<'a'>) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

// Mock events data
jest.mock('@/data/events', () => ({
  getFeaturedEvents: () => [
    {
      id: '1',
      title: 'Test Event 1',
      description: 'Test beskrivelse for event 1',
      date: '2024-02-15',
      time: '10:00',
      duration: '2 timer',
      slug: 'test-event-1',
      image: '/images/events/test-event-1.jpg',
      type: 'webinar',
      location: {
        type: 'online'
      },
      price: {
        type: 'free'
      },
      capacity: 100,
      registered: 45,
      registration: {
        isOpen: true
      }
    },
    {
      id: '2',
      title: 'Test Event 2',
      description: 'Test beskrivelse for event 2',
      date: '2024-02-20',
      time: '14:00',
      duration: '3 timer',
      slug: 'test-event-2',
      image: '', // Empty image to test fallback
      type: 'workshop',
      location: {
        type: 'physical',
        city: 'København'
      },
      price: {
        type: 'paid',
        amount: 299
      },
      capacity: 50,
      registered: 48,
      registration: {
        isOpen: true
      }
    }
  ]
}))

expect.extend(toHaveNoViolations)

describe('FeaturedEvents', () => {
  it('should render without accessibility violations', async () => {
    const { container } = render(<FeaturedEvents />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render featured events', () => {
    render(<FeaturedEvents />)

    expect(screen.getByText('Kommende Events')).toBeTruthy()
    expect(screen.getByText('Test Event 1')).toBeTruthy()
    expect(screen.getByText('Test Event 2')).toBeTruthy()
  })

  it('should have proper alt text for images', () => {
    render(<FeaturedEvents />)

    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img.hasAttribute('alt')).toBe(true)
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('should have proper src attributes for images', () => {
    render(<FeaturedEvents />)

    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img.hasAttribute('src')).toBe(true)
      expect(img.getAttribute('src')).not.toBe('')
    })
  })

  it('should use fallback image when event image is empty', () => {
    render(<FeaturedEvents />)

    const images = screen.getAllByRole('img')
    const fallbackImage = images.find(img =>
      img.getAttribute('src')?.includes('default-event.svg')
    )
    expect(fallbackImage).toBeTruthy()
  })

  it('should have accessible links', () => {
    render(<FeaturedEvents />)

    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link.hasAttribute('href')).toBe(true)
      expect(link.getAttribute('href')).not.toBe('')
    })
  })

  it('should have proper heading structure', () => {
    render(<FeaturedEvents />)

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading.textContent).toBe('Kommende Events')

    const eventHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(eventHeadings).toHaveLength(3) // 2 event titles + 1 'Mist aldrig et event' heading
  })

  it('should display event details correctly', () => {
    render(<FeaturedEvents />)

    expect(screen.getByText('Gratis')).toBeTruthy()
    expect(screen.getByText('299 DKK')).toBeTruthy()
    expect(screen.getByText('Online Event')).toBeTruthy()
    expect(screen.getByText('København')).toBeTruthy()
  })

  it('should show "Få pladser" warning when capacity is almost full', () => {
    render(<FeaturedEvents />)

    expect(screen.getByText('Få pladser')).toBeTruthy()
  })
})
