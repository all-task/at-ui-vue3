<template>
  <div id="main">
    <TheHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from './components/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
});
</script>

<style lang="scss">
@import '@/../styles/global.scss';
@import './styles/examples.scss';
</style>
