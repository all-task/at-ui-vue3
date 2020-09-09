import { RouteRecordRaw } from 'vue-router';

const components: Array<RouteRecordRaw> = [
  // {
  //   path: '/components/at-color',
  //   name: 'Color',
  //   group: 'global',
  //   component: () => import(
  //     /* webpackChunkName: "view-at-color" */
  //     '../views/AtColor/ViewAtColor.vue'
  //   ),
  // },
  // {
  //   path: '/components/at-step',
  //   name: 'Step',
  //   group: 'navigation',
  //   component: () => import(
  //     /* webpackChunkName: "view-at-step" */
  //     '../views/AtStep/ViewAtStep.vue'
  //   ),
  // },
  {
    path: '/components/at-button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "at-button-examples" */'../views/AtButton/AtButtonExamples.vue'),
  },
  {
    path: '/components/at-Selection',
    name: 'Selection',
    component: () => import(/* webpackChunkName: "at-selection-examples" */ '../views/AtSelection/AtSelectionExamples.vue'),
  },
  // {
  //   path: '/components/at-input',
  //   name: 'Input',
  //   group: 'interactive',
  //   component: () => import(
  //     /* webpackChunkName: "view-at-input" */
  //     '../views/AtInput/ViewAtInput.vue'
  //   ),
  // },
  // {
  //   path: '/components/at-list',
  //   name: 'List',
  //   group: 'data display',
  //   component: () => import(
  //     /* webpackChunkName: "view-at-list" */
  //     '../views/AtList/ViewAtList.vue'
  //   ),
  // },
  {
    path: '/components/at-table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "at-table-examples" */ '../views/AtTable/AtTableExamples.vue'),
  },
];

export default components;
