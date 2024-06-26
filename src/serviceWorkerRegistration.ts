import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // You can prompt the user to refresh the app
    console.log('New content available, please refresh.')
  },
  onOfflineReady() {
    // You can notify the user that they can use the app offline
    console.log('App is ready to work offline.')
  },
})

export default updateSW
