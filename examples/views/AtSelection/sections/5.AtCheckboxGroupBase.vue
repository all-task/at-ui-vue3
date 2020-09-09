<template>
  <section
    id="intro"
    class="section section-at-checkbox-group-base">
    <ExampleContainer title="AtCheckboxGroup Base">
      <at-checkbox-group
        v-model:checked="checked"
        label="AtCheckbox Group"
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
  name: 'SectionAtCheckboxGroupBase',
  setup() {
    const options = [
      {
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
    const checked = ref(['option_1', 'option_2']);

    return {
      options,
      checked,
    };
  },
});
</script>
