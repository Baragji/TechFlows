'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Typography,
  Container,
  Icon,
} from '@/components/ui';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background-light py-12">
      <Container size="xl" padding="lg">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <Typography variant="display" className="mb-4 animate-fade-in-up">
              Design System
            </Typography>
            <Typography variant="body-lg" className="animate-fade-in-delay">
              Obsidian-inspirerede komponenter til TechFlow Solutions
            </Typography>
          </div>

          {/* Typography Section */}
          <section className="animate-fade-in-delay">
            <Typography variant="section" className="mb-8">
              Typography
            </Typography>
            <div className="space-y-4">
              <Typography variant="display">Display Text</Typography>
              <Typography variant="hero">Hero Headline</Typography>
              <Typography variant="hero-sm">Hero Small</Typography>
              <Typography variant="section">Section Title</Typography>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="body-lg">Large body text for important content</Typography>
              <Typography variant="body">Regular body text for general content</Typography>
              <Typography variant="caption">Caption text for small details</Typography>
              <Typography variant="hero" gradient>
                Gradient Text Example
              </Typography>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="animate-fade-in-delay-2">
            <Typography variant="section" className="mb-8">
              Buttons
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="obsidian">Obsidian</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="minimal">Minimal</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="mt-4 space-x-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </section>

          {/* Cards Section */}
          <section className="animate-fade-in-delay-3">
            <Typography variant="section" className="mb-8">
              Cards
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Standard card with clean design</Typography>
                </CardContent>
              </Card>

              <Card variant="glass" className="text-white">
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body" className="text-white/80">
                    Glassmorphism effect card
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="obsidian" className="text-white">
                <CardHeader>
                  <CardTitle>Obsidian Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body" className="text-white/80">
                    Dark themed card
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="hover">
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Interactive hover effects</Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Icons Section */}
          <section>
            <Typography variant="section" className="mb-8">
              Icons
            </Typography>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
              {[
                'arrow-right',
                'arrow-left',
                'arrow-up',
                'arrow-down',
                'menu',
                'close',
                'chevron-down',
                'chevron-up',
                'code',
                'globe',
                'cog',
                'lightning',
                'chart',
                'mobile',
                'mail',
                'phone',
                'location',
                'check',
                'star',
                'heart',
                'external-link',
              ].map((iconName) => (
                <div
                  key={iconName}
                  className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
                >
                  <Icon name={iconName} size="lg" />
                  <Typography variant="caption" className="mt-2 text-center">
                    {iconName}
                  </Typography>
                </div>
              ))}
            </div>
          </section>

          {/* Animations Section */}
          <section>
            <Typography variant="section" className="mb-8">
              Animations
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Hover Lift</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Hover over this card</Typography>
                </CardContent>
              </Card>

              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle>Hover Glow</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Glowing hover effect</Typography>
                </CardContent>
              </Card>

              <Card className="glass-hover">
                <CardHeader>
                  <CardTitle>Glass Hover</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Glass morphism hover</Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Utility Classes */}
          <section>
            <Typography variant="section" className="mb-8">
              Utility Classes
            </Typography>
            <div className="space-y-4">
              <div className="p-4 glass rounded-lg">
                <Typography variant="body" className="text-white">
                  Glass utility class
                </Typography>
              </div>
              <div className="p-4 gradient-border">
                <Typography variant="body">Gradient border utility</Typography>
              </div>
              <Typography variant="h3" className="gradient-text">
                Gradient text utility
              </Typography>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
