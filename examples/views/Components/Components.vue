<template>
  <div class="components">
    <SideNav :list="components" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideNav from '../../components/SideNav.vue';
import components from '../../router/components';

export default defineComponent({
  name: 'Components',
  components: {
    SideNav,
  },
  setup() {
    return {
      components,
    };
  },
});
</script>

<style lang="scss">
.components {
  display: flex;
  height: 100%;
}
</style>
