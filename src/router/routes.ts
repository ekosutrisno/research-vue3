import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Lighbox from '../views/Lighbox.vue';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: "Home",
      component: Home,
   },
   {
      path: '/lightbox',
      name: "Lighbox",
      component: Lighbox,
   }
]

export default routes;