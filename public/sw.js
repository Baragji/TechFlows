// Service Worker for TechFlow Solutions
// Provides offline functionality and caching

const CACHE_NAME = 'techflow-v1';
const STATIC_CACHE_NAME = 'techflow-static-v1';
const DYNAMIC_CACHE_NAME = 'techflow-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
  // Add critical CSS and JS files here when available
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
  
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Ensure the service worker takes control immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }
  
  // Handle different types of requests
  if (request.destination === 'document') {
    // HTML pages - Network first, cache fallback
    event.respondWith(handlePageRequest(request));
  } else if (request.destination === 'image') {
    // Images - Cache first, network fallback
    event.respondWith(handleImageRequest(request));
  } else if (request.url.includes('/_next/static/')) {
    // Static assets - Cache first (they have hashes)
    event.respondWith(handleStaticAssetRequest(request));
  } else {
    // Other requests - Network first
    event.respondWith(handleOtherRequest(request));
  }
});

// Handle page requests (HTML)
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If no cache, return offline page
    const offlineResponse = await caches.match('/offline');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    // Last resort - basic offline response
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Offline - TechFlow Solutions</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { 
              font-family: system-ui, sans-serif; 
              text-align: center; 
              padding: 2rem;
              background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
              color: white;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0;
            }
            .container {
              max-width: 500px;
            }
            h1 { color: #3b82f6; margin-bottom: 1rem; }
            p { margin-bottom: 2rem; opacity: 0.8; }
            button {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 16px;
            }
            button:hover { opacity: 0.9; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Du er offline</h1>
            <p>Tjek din internetforbindelse og prøv igen.</p>
            <button onclick="window.location.reload()">Prøv igen</button>
          </div>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}

// Handle image requests
async function handleImageRequest(request) {
  try {
    // Check cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return placeholder image if available
    const placeholderResponse = await caches.match('/placeholder-image.svg');
    if (placeholderResponse) {
      return placeholderResponse;
    }
    
    // Return empty response
    return new Response('', { status: 404 });
  }
}

// Handle static assets (CSS, JS with hashes)
async function handleStaticAssetRequest(request) {
  try {
    // Check cache first (static assets are immutable)
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch from network and cache
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // For static assets, we can't provide a meaningful fallback
    return new Response('', { status: 404 });
  }
}

// Handle other requests
async function handleOtherRequest(request) {
  try {
    // Network first
    const networkResponse = await fetch(request);
    
    // Cache API responses for short time
    if (networkResponse.ok && request.url.includes('/api/')) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      // Set a short TTL for API responses
      const response = networkResponse.clone();
      response.headers.set('sw-cache-timestamp', Date.now().toString());
      cache.put(request, response);
    }
    
    return networkResponse;
  } catch (error) {
    // Try cache for API requests
    if (request.url.includes('/api/')) {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        // Check if cache is still fresh (5 minutes)
        const cacheTimestamp = cachedResponse.headers.get('sw-cache-timestamp');
        if (cacheTimestamp && Date.now() - parseInt(cacheTimestamp) < 5 * 60 * 1000) {
          return cachedResponse;
        }
      }
    }
    
    return new Response('Network error', { status: 503 });
  }
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  // This would sync with your backend when connection is restored
  console.log('Syncing contact form submissions...');
}

// Push notifications (if implemented)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Se mere',
          icon: '/icon-explore.png'
        },
        {
          action: 'close',
          title: 'Luk',
          icon: '/icon-close.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('TechFlow Service Worker loaded');