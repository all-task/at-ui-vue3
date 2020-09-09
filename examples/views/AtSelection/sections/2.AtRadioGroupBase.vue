<template>
  <section
    id="AtRadio-Base"
    class="section section-at-radio-group-base">
    <ExampleContainer title="AtRadioGroup Base">
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        :options="options" />
      <p>Checked: {{ checked }}</p>
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtRadioGroupBase',
  setup() {
    const options = [{
      label: 'Option 1',
      value: 'option_1',
    },
    {
      label: 'Option 2',
      value: 'option_2',
    },
    {
      label: 'Option 3',
      value: 'option_3',
      disabled: true,
    },
    {
      label: 'Option 4',
      value: 'option_4',
    },
    ];
    const checked = ref('option_2');

    return {
      options,
      checked,
    };
  },
});
</script>
