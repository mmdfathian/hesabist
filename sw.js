// Service Worker for Offline Functionality

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('offline-cache').then(function(cache) {
            return cache.addAll([
                '/', // Include your offline page
                '/index.html', // Add other resources as needed
                // '/style.css', // Uncomment and include your CSS files if needed
                // '/script.js', // Uncomment and include your JS files if needed
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});