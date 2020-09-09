<template>
<tbody class="at-table__tbody">
  <at-tr
    v-for="(row, index) in rows"
    :key="`row-${index}`"
    :row="row"
    :local-row="localRows[row.id]" />
</tbody>
</template>

<script lane="ts">
import {
  defineComponent,
} from 'vue';

import AtTr from './AtTr.vue';

export default defineComponent({
  name: 'AtTbody',
  parent: 'AtTable',
  components: { AtTr },
  props: {
    localRows: {
      type: Object,
      required: true,
    },
  },
  inject: [
    'cols',
    'rows',
  ],
});
</script>
