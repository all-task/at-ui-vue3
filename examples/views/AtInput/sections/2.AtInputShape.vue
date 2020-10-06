<template>
  <section
    id="shape"
    class="section section-at-input-shape">
    <ExampleContainer title="AtInput Shape">
      <at-input
        label="AtInput"
        value="rectangle"
      />
      <br>
      <at-input
        label="AtInput"
        value="rounded"
        shape="rounded"
      />
      <br>
      <at-input
        label="AtInput"
        value="line"
        shape="line"
      />
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtInputShape',
  setup() {
    const atInput = ref('AtInput');
    return {
      atInput,
    };
  },
});
</script>
