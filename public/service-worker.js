// Install event
this.addEventListener('install', function(event) {
    console.log('Service Worker installed');
  });
  
  // Activate event
  this.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
  });
  
  // Fetch event
  this.addEventListener('fetch', function(event) {
    console.log('Fetch intercepted for:', event.request.url);
  });
  