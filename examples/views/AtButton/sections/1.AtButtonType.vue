<template>
  <section
    id="type"
    class="section section-at-button-type">
    <ExampleContainer title="AtButton Type">
      <at-button-group>
        <at-button type="text">
          Text Button
        </at-button>
        <at-button type="minor">
          Minor Button
        </at-button>
        <at-button type="major">
          Major Button
        </at-button>
      </at-button-group>
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'SectionAtButtonType',
});
</script>
