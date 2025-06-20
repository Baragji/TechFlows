import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock data for testing
const mockEvents = [
  {
    id: '1',
    title: 'Test Event 1',
    date: '2024-02-15',
    location: 'Test Location 1',
    description: 'Test description 1',
    image: '/images/events/test1.jpg'
  },
  {
    id: '2',
    title: 'Test Event 2',
    date: '2024-02-20',
    location: 'Test Location 2',
    description: 'Test description 2',
    image: '/images/events/test2.jpg'
  }
]

// Mock the events data module
jest.mock('@/data/events', () => ({
  events: mockEvents
}))

// Example component to test (replace with your actual component)
interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
}

interface ExampleComponentProps {
  events?: Event[]
  title?: string
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  events = mockEvents,
  title = "Featured Events"
}) => {
  return (
    <section className="featured-events" aria-labelledby="featured-events-title">
      <h2 id="featured-events-title">{title}</h2>
      <div className="events-grid">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <img
              src={event.image || '/images/placeholder.svg'}
              alt={`Billede af ${event.title}`}
              loading="lazy"
            />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
      <h3>Mist aldrig et event</h3>
    </section>
  )
}

// Test suite
describe('ExampleComponent', () => {
  // Basic rendering test
  it('renders without crashing', () => {
    render(<ExampleComponent />)
    expect(screen.getByText('Featured Events')).toBeInTheDocument()
  })

  // Content testing
  it('displays all events', () => {
    render(<ExampleComponent events={mockEvents} />)

    mockEvents.forEach(event => {
      expect(screen.getByText(event.title)).toBeInTheDocument()
      expect(screen.getByText(event.location)).toBeInTheDocument()
      expect(screen.getByText(event.description)).toBeInTheDocument()
    })
  })

  // Image testing
  it('renders images with proper alt text', () => {
    render(<ExampleComponent events={mockEvents} />)

    mockEvents.forEach(event => {
      const img = screen.getByAltText(`Billede af ${event.title}`)
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', event.image)
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  // Empty state testing
  it('handles empty events array', () => {
    render(<ExampleComponent events={[]} />)
    expect(screen.getByText('Featured Events')).toBeInTheDocument()
    expect(screen.getByText('Mist aldrig et event')).toBeInTheDocument()
  })

  // Custom title testing
  it('renders custom title when provided', () => {
    const customTitle = 'Upcoming Events'
    render(<ExampleComponent title={customTitle} />)
    expect(screen.getByText(customTitle)).toBeInTheDocument()
  })

  // Structure testing
  it('has correct heading structure', () => {
    render(<ExampleComponent />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(4) // 1 h2 + 3 h3 (2 events + "Mist aldrig")

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Featured Events')
  })

  // Accessibility testing
  it('should not have accessibility violations', async () => {
    const { container } = render(<ExampleComponent />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // ARIA testing
  it('has proper ARIA attributes', () => {
    render(<ExampleComponent />)

    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('aria-labelledby', 'featured-events-title')

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(mockEvents.length)
  })

  // User interaction testing
  it('handles user interactions', async () => {
    const user = userEvent.setup()
    render(<ExampleComponent />)

    // Test that images are focusable and accessible
    const images = screen.getAllByRole('img')
    for (const img of images) {
      await user.hover(img)
      expect(img).toBeInTheDocument()
    }
  })
})

// Additional utility tests
describe('Component Utilities', () => {
  it('handles missing image gracefully', () => {
    const eventWithoutImage = {
      ...mockEvents[0],
      image: ''
    }

    render(<ExampleComponent events={[eventWithoutImage]} />)

    const img = screen.getByAltText(`Billede af ${eventWithoutImage.title}`)
    expect(img).toHaveAttribute('src', '/images/placeholder.svg')
  })

  it('maintains semantic structure', () => {
    render(<ExampleComponent />)

    // Check for proper semantic elements
    expect(screen.getByRole('region')).toBeInTheDocument() // section
    expect(screen.getAllByRole('article')).toHaveLength(mockEvents.length)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
