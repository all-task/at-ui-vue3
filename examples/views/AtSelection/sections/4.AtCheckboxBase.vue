<template>
<section
  id="intro"
  class="section section-at-checkbox-base">
  <ExampleContainer title="AtCheckbox Base">
    <at-checkbox
      v-model:checked="atCheckbox"
      label="AtCheckbox" />
    <div class="at-checkbox-group at-group">
      <div class="at-group__inner">
        <at-checkbox label="Unchecked" />
        <at-checkbox
          indeterminate
          label="Indeterminate" />
        <at-checkbox
          checked
          label="Checked" />
        <at-checkbox
          disabled
          label="Disabled & Unchecked" />
        <at-checkbox
          indeterminate
          disabled
          label="Disabled & Indeterminate" />
        <at-checkbox
          checked
          disabled
          label="Disabled & Checked" />
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
  name: 'SectionAtCheckboxBase',
  setup() {
    const atCheckbox = ref(false);
    return {
      atCheckbox,
    };
  },
});
</script>
