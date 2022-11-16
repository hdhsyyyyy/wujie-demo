import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import WujieVue from 'wujie-vue3';

if (window.__POWERED_BY_WUJIE__) {
  // eslint-disable-next-line
  window.__webpack_public_path__ = window.__WUJIE_PUBLIC_PATH__;
}
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

app.use(WujieVue);
