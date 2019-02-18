export default async function() {
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          await navigator.serviceWorker.register('/sw.js')
        } catch (error) {
          console.log(error)
        }
      })
    } else {
      return ''
    }
  }
  process.env.NODE_ENV === 'production' && registerServiceWorker()
}
