<template>
<div class="examples at-table-examples">
  <div class="examples__wrap">
    <AtTableIntro />
    <h4>Examples</h4>
    <AtTableBase />
    <AtTableSize />
    <AtTableBorder />
    <AtTableStriped />
    <AtTableHideHeader />
    <AtTableFixed />
    <AtTableSelection />
    <AtTableSelectionOptions />
    <AtTableSelectionWithBigArray />
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import AtTableIntro from './sections/0.AtTableIntro.vue';
import AtTableBase from './sections/1.AtTableBase.vue';
import AtTableSize from './sections/2.AtTableSize.vue';
import AtTableBorder from './sections/3.AtTableBorder.vue';
import AtTableStriped from './sections/4.AtTableStriped.vue';
import AtTableHideHeader from './sections/5.AtTableHideHeader.vue';
import AtTableFixed from './sections/6.AtTableFixed.vue';
import AtTableSelection from './sections/7.AtTableSelection.vue';
import AtTableSelectionOptions from './sections/8.AtTableSelectionOptions.vue';
import AtTableSelectionWithBigArray from './sections/9.AtTableSelectionWithBigArray.vue';

export default defineComponent({
  name: 'AtTableExamples',
  components: {
    AtTableIntro,
    AtTableBase,
    AtTableSize,
    AtTableBorder,
    AtTableStriped,
    AtTableHideHeader,
    AtTableFixed,
    AtTableSelection,
    AtTableSelectionOptions,
    AtTableSelectionWithBigArray,
  },
});
</script>

<style lang="scss">

</style>
