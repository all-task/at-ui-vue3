import AtButton from './AtButton';
import AtButtonGroup from './AtButtonGroup';
import AtInput from './AtInput';
import AtRadio from './AtRadio';
import AtRadioGroup from './AtRadioGroup';
import AtCheckbox from './AtCheckbox';
import AtCheckboxGroup from './AtCheckboxGroup';
import AtTable from './AtTable';

const components = [
  AtButton,
  AtButtonGroup,
  AtInput,
  AtRadio,
  AtRadioGroup,
  AtCheckbox,
  AtCheckboxGroup,
  AtTable,
];

const install = (Vue: any) => {
  components.map((component) => Vue.component(component.name, component));
};

export default {
  install,
  ...components,
};
