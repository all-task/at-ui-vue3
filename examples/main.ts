import { createApp } from 'vue';

import router from './router';

import AtUI from '../components';

import exampleComponents from './components';

import Main from './Main.vue';

const app = createApp(Main);

app.use(router);

app.use(AtUI);

app.use(exampleComponents);

app.mount('#root');
