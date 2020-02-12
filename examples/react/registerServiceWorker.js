export default () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(
      function(registration) {
        console.log('Service worker registration succeeded:', registration)
      },
      function(error) {
        console.log('Service worker registration failed:', error)
      },
    )
  } else {
    console.log('Service workers are not supported.')
  }
}
