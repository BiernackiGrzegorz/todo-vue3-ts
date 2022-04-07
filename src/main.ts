import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import FontAwesomeIcon from './plugins/fontawesome'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
