import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';

import App from './App.vue';
import './index.css';
import './assets/tooltip.css';

import store from './store';
import router from './router';
import directives from './directives';

const app = createApp(App);

directives(app);


const updateSW = registerSW({
   onNeedRefresh() {
      // show a prompt to user
   },
   onOfflineReady() {
      // show a ready to work offline to user
   },
})

app.use(router)
   .use(store)
   .mount('#app')
