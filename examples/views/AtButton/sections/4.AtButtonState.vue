<template>
  <section
    id="state"
    class="section section-at-button-state">
    <ExampleContainer title="AtButton State">
      <at-button-group>
        <at-button>
          Normal
        </at-button>
        <at-button state="hover">
          Hover
        </at-button>
        <at-button state="hover">
          Active
        </at-button>
        <at-button state="running">
          Running
        </at-button>
        <at-button state="disabled">
          Disabled
        </at-button>
      </at-button-group>
      <at-button-group>
        <at-button type="major">
          Normal
        </at-button>
        <at-button
          type="major"
          state="hover">
          Hover
        </at-button>
        <at-button
          type="major"
          state="hover">
          Active
        </at-button>
        <at-button
          type="major"
          state="running">
          Running
        </at-button>
        <at-button
          type="major"
          state="disabled">
          Disabled
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
  name: 'SectionAtButtonState',
});
</script>
