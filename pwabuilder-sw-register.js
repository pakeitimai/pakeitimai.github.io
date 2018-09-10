//This is the "Offline page" service worker

//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register')
} else {
  //Register the ServiceWorker
  navigator.serviceWorker.register('pwabuilder-sw.js', {
    scope: './'
  }).then(function(reg) {


      Notification.requestPermission(function(result) {
          if (result === 'granted') {
              navigator.serviceWorker.ready.then(function(registration) {
                  registration.showNotification('Notification with ServiceWorker');
              });
          }
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

