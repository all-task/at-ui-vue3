<template>
  <section
    id="AtRadio"
    class="section section-at-radio-base">
    <ExampleContainer title="AtRadio Base">
      <at-radio
        v-model:checked="atRadio"
        label="AtRadio" />
      <div class="at-radio-group at-group">
        <div class="at-group__inner">
          <at-radio label="Unchecked" />
          <at-radio
            checked
            label="Checked" />
          <at-radio
            disabled
            label="Disabled" />
          <at-radio
            checked
            disabled
            label="Disabled" />
        </div>
      </div>
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'SectionAtRadioBase',
  setup() {
    const atRadio = ref(false);
    return {
      atRadio,
    };
  },
});
</script>
