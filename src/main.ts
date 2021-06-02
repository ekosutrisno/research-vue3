import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tooltip.css';

import router from './router';
import directives from './directives';

const app = createApp(App);

directives(app);

app.use(router)
   .mount('#app')
