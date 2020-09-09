<template>
<div class="examples at-table-examples">
  <div class="examples__wrap">
    <AtSelectionIntro />
    <h4>Examples</h4>
    <AtRadioBase />
    <AtRadioGroupBase />
    <AtRadioGroupOptions />
    <AtCheckboxBase />
    <AtCheckboxGroupBase />
    <AtCheckboxGroupOptions />
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import AtSelectionIntro from './sections/0.AtSelectionIntro.vue';
import AtRadioBase from './sections/1.AtRadioBase.vue';
import AtRadioGroupBase from './sections/2.AtRadioGroupBase.vue';
import AtRadioGroupOptions from './sections/3.AtRadioGroupOptions.vue';
import AtCheckboxBase from './sections/4.AtCheckboxBase.vue';
import AtCheckboxGroupBase from './sections/5.AtCheckboxGroupBase.vue';
import AtCheckboxGroupOptions from './sections/6.AtCheckboxGroupOptions.vue';

export default defineComponent({
  name: 'AtSelectionExamples',
  components: {
    AtSelectionIntro,
    AtRadioBase,
    AtRadioGroupBase,
    AtRadioGroupOptions,
    AtCheckboxBase,
    AtCheckboxGroupBase,
    AtCheckboxGroupOptions,
  },
});
</script>
