if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js')
    .then(() => console.log("✅ Service worker registered"))
    .catch(err => console.error("❌ Service worker error", err));
}
