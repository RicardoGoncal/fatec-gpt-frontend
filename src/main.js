import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3'  // Vue 3 usa esta versão

const app = createApp(App)
app.use(BootstrapVue3)
app.use(IconsPlugin)
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app');