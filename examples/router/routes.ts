import { RouteRecordRaw } from 'vue-router';

import components from './components';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: () => import(
    //   /* webpackChunkName: "Home" */
    //   '../views/Home/Home.vue'
    // ),
    redirect: '/components/at-button',
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(
      /* webpackChunkName: "guides" */
      '../views/Guides/Guides.vue'
    ),
    // children: guides,
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(
      /* webpackChunkName: "components" */
      '../views/Components/Components.vue'
    ),
    children: components,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(
      /* webpackChunkName: "components" */
      '../views/Resources/Resources.vue'
    ),
  },
];

export default routes;
