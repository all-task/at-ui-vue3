<template>
  <section
    id="AtRadio-Options"
    class="section section-at-radio-group-options">
    <ExampleContainer title="AtRadioGroup Options">
      <h6>Disabled</h6>
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        disabled
        :options="options" />
      <br />
      <h6>Vertical</h6>
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        column
        :options="options" />
      <br />
      <h6>Button</h6>
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        button
        :options="options" />
      <br />
      <h6>Rounded Button</h6>
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        :button="{
          shape: 'rounded'
        }"
        :options="options" />
      <br />
      <h6>Rounded Button</h6>
      <at-radio-group
        v-model:checked="checked"
        label="AtRadio Group"
        :button="{
          shape: 'capsule'
        }"
        :options="options" />
      <br />
      <h6>Extra Button</h6>
      <at-radio-group
        v-model:checked="checked"
        :button="{
          size: 'extra'
        }"
        :options="options" />
      <br />
      <h6>Large Button</h6>
      <at-radio-group
        v-model:checked="checked"
        :button="{
          size: 'large'
        }"
        :options="options" />
      <br />
      <h6>Normal Button</h6>
      <at-radio-group
        v-model:checked="checked"
        button
        :options="options" />
      <br />
      <h6>Mini Button</h6>
      <at-radio-group
        v-model:checked="checked"
        :button="{
          size: 'mini'
        }"
        :options="options" />
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtRadioGroupOptions',
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
    const checked = ref('option_2');

    return {
      options,
      checked,
    };
  },
});
</script>
