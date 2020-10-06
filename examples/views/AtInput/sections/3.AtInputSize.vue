<template>
  <section
    id="size"
    class="section section-at-input-size">
    <ExampleContainer title="AtInput Size">
      <at-input
        v-model:value="atInput"
        size="mini"
        placeholder="mini" />
      <at-input
        v-model:value="atInput"
        placeholder="normal" />
      <at-input
        v-model:value="atInput"
        size="large"
        placeholder="large" />
      <at-input
        v-model:value="atInput"
        size="extra"
        placeholder="extra" />
      <br>
      <br>
      <br>
      <br>
      <at-input
        v-model:value="atInput"
        label="AtInput"
        size="mini"
        placeholder="mini" />
      <br>
      <at-input
        v-model:value="atInput"
        label="AtInput"
        placeholder="normal" />
      <br>
      <at-input
        v-model:value="atInput"
        label="AtInput"
        size="large"
        placeholder="large" />
      <br>
      <at-input
        v-model:value="atInput"
        label="AtInput"
        size="extra"
        placeholder="extra"/>
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtInputSize',
  setup() {
    const atInput = ref('');
    return {
      atInput,
    };
  },
});
</script>
