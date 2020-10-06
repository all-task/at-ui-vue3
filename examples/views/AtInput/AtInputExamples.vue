<template>
  <div class="examples at-input-examples">
    <div class="examples__wrap">
      <AtInputIntro />
      <h4>Examples</h4>
      <AtInputBase />
      <AtInputShape />
      <AtInputSize />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import AtInputIntro from './sections/0.AtInputIntro.vue';
import AtInputBase from './sections/1.AtInputBase.vue';
import AtInputShape from './sections/2.AtInputShape.vue';
import AtInputSize from './sections/3.AtInputSize.vue';

export default defineComponent({
  name: 'AtInputExamples',
  components: {
    AtInputIntro,
    AtInputBase,
    AtInputShape,
    AtInputSize,
  },
});
</script>
