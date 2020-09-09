<template>
  <div class="at-button-group at-group">
    <div class="at-group__inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'AtButtonGroup',
});
</script>
