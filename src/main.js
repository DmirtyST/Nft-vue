import { createApp } from 'vue'
import './style/global.scss'
import App from './App.vue'
import router from "./router/index";
import "@fontsource/playfair-display/400.css"
createApp(App).use(router).mount('#app')
