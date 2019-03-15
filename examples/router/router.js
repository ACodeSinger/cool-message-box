import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import componentPage from '../views/componentPage.vue';
import coolMessagePage from '../views/coolMessagePage.vue';
import noFound from '../views/noFound.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/componentPage',
    },
    {
      path: '/componentPage',
      name: 'componentPage',
      component: componentPage,
    },
    {
      path: '/coolMessagePage',
      name: 'coolMessagePage',
      component: coolMessagePage,
    },
    {
      path: '*',
      component: noFound,
    },
  ],
});


export default router;
