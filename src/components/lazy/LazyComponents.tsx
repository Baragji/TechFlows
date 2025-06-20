'use client';

import dynamic from 'next/dynamic';

// Lazy load heavy components that are not immediately visible
export const LazyStatsSection = dynamic(() => import('@/components/sections/StatsSection'), {
  loading: () => (
    <div className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-glass-light backdrop-blur-xs rounded-2xl p-8 border border-white/10 animate-pulse"
            >
              <div className="w-12 h-12 bg-glass-medium rounded-xl mb-4" />
              <div className="h-8 bg-glass-medium rounded mb-2" />
              <div className="h-4 bg-glass-medium rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export const LazyClientMarquee = dynamic(() => import('@/components/sections/ClientMarquee'), {
  loading: () => (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 bg-glass-light rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-glass-light rounded w-96 mx-auto animate-pulse" />
        </div>
        <div className="flex space-x-8 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-32 h-16 bg-glass-light rounded animate-pulse shrink-0" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export const LazyTestimonialsCarousel = dynamic(
  () => import('@/components/sections/TestimonialsCarousel'),
  {
    loading: () => (
      <div className="py-20 bg-glass-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-glass-light rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-glass-light rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-glass-light backdrop-blur-xs rounded-2xl p-8 border border-white/10 animate-pulse">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-glass-medium rounded-full" />
                <div>
                  <div className="h-4 bg-glass-medium rounded w-32 mb-2" />
                  <div className="h-3 bg-glass-medium rounded w-24" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-glass-medium rounded" />
                <div className="h-4 bg-glass-medium rounded w-5/6" />
                <div className="h-4 bg-glass-medium rounded w-4/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const LazyFeaturedEvents = dynamic(() => import('@/components/sections/FeaturedEvents'), {
  loading: () => (
    <div className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 bg-glass-light rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-glass-light rounded w-96 mx-auto animate-pulse" />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-glass-light backdrop-blur-xs rounded-2xl overflow-hidden border border-white/10 animate-pulse"
            >
              <div className="w-full h-48 bg-glass-medium" />
              <div className="p-6">
                <div className="h-6 bg-glass-medium rounded mb-3" />
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-glass-medium rounded" />
                  <div className="h-4 bg-glass-medium rounded w-5/6" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-glass-medium rounded w-3/4" />
                  <div className="h-3 bg-glass-medium rounded w-2/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export const LazyBlogGrid = dynamic(() => import('@/components/sections/BlogGrid'), {
  loading: () => (
    <div className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-glass-light backdrop-blur-xs rounded-2xl overflow-hidden border border-white/10 animate-pulse"
            >
              <div className="w-full h-48 bg-glass-medium" />
              <div className="p-6">
                <div className="h-6 bg-glass-medium rounded mb-3" />
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-glass-medium rounded" />
                  <div className="h-4 bg-glass-medium rounded w-5/6" />
                  <div className="h-4 bg-glass-medium rounded w-4/6" />
                </div>
                <div className="flex justify-between">
                  <div className="h-3 bg-glass-medium rounded w-20" />
                  <div className="h-3 bg-glass-medium rounded w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export const LazyEventsGrid = dynamic(() => import('@/components/sections/EventsGrid'), {
  loading: () => (
    <div className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-glass-light backdrop-blur-xs rounded-2xl overflow-hidden border border-white/10 animate-pulse"
            >
              <div className="w-full h-48 bg-glass-medium" />
              <div className="p-6">
                <div className="h-6 bg-glass-medium rounded mb-3" />
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-glass-medium rounded" />
                  <div className="h-4 bg-glass-medium rounded w-5/6" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-glass-medium rounded w-3/4" />
                  <div className="h-3 bg-glass-medium rounded w-2/3" />
                  <div className="h-3 bg-glass-medium rounded w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
});
