import ExampleContainer from './ExampleContainer.vue';

const components = [
  ExampleContainer,
];

const install = (Vue: any): void => {
  components.map((component) => Vue.component(component.name, component));
};

export default {
  install,
};
