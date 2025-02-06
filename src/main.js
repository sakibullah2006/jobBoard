import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@/assets/main.css'
import 'primeicons/primeicons.css'
import router from '@/router/index.js'
import App from './App.vue'


const app = createApp(App)
    
app.use(router)    
app.use(Toast)

app.mount('#app')
