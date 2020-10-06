<template>
  <section
    id="base"
    class="section section-at-input-base">
    <ExampleContainer title="AtInput Base">
      <at-input
        v-model:value="atInput" />
      <at-input
        value="active"
        class="at-input--active" />
      <at-input
        value="disabled"
        disabled />
      <at-input
        value="error"
        error />
      <br>
      <br>
      <br>
      <br>
      <at-input
        v-model:value="atInput"
        label="AtInput" />
      <br>
      <at-input
        label="AtInput"
        value="active"
        class="at-input--active" />
      <br>
      <at-input
        label="AtInput"
        value="disabled"
        disabled />
      <br>
      <at-input
        label="AtInput"
        value="error"
        error />
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtInputBase',
  setup() {
    const atInput = ref('AtInput');
    return {
      atInput,
    };
  },
});
</script>
