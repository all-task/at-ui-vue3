<template>
  <div class="examples at-button-examples">
    <div class="examples__wrap">
      <AtButtonIntro />
      <h4>Examples</h4>
      <AtButtonType />
      <AtButtonShape />
      <AtButtonSize />
      <AtButtonState />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import AtButtonIntro from './sections/0.AtButtonIntro.vue';
import AtButtonType from './sections/1.AtButtonType.vue';
import AtButtonShape from './sections/2.AtButtonShape.vue';
import AtButtonSize from './sections/3.AtButtonSize.vue';
import AtButtonState from './sections/4.AtButtonState.vue';

export default defineComponent({
  name: 'AtButtonExamples',
  components: {
    AtButtonIntro,
    AtButtonType,
    AtButtonShape,
    AtButtonSize,
    AtButtonState,
  },
});
</script>
