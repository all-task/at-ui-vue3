<template>
<tr
  class="at-table__tr"
  :class="{
      'at-table__tr--selected': localRow && localRow.isSelected,
    }"
  @click="rowClickHandler">
  <th
    v-if="selection"
    class="at-table__selection at-table__th"
    :class="{
        'at-table__th--sticky': fixed,
        'at-table__th--sticky-left': fixed,
      }">
    <span class="at-table__cell">
      <AtCheckbox
        v-if="selectionType === 'checkbox'"
        class="at-table__select-row-checkbox"
        :name="atId"
        :checked="localRow && localRow.isSelected"
        @change="(state) => { selectRow(row, state); }"
        @click="(event) => { event.stopPropagation(); }" />
      <at-radio
        v-else
        class="at-table__select-row-radio"
        :name="atId"
        :checked="localRow && localRow.isSelected"
        @change="(state) => { switchRow(row); }"
        @click="(event) => { event.stopPropagation(); }" />
    </span>
  </th>
  <template v-for="(col, colIndex) in cols">
    <th
      v-if="col.fixed"
      :key="`cell-${colIndex}`"
      class="at-table__th"
      :class="{
          'at-table__th--sticky': col.fixed,
          'at-table__th--sticky-left': col.fixed === 'left',
          'at-table__th--sticky-right': col.fixed === 'right',
        }"
      :style="{
          left: col.left && `${col.left}px`,
          right: col.right && `${col.right}px`,
        }">
      <span class="at-table__cell">
        {{ row[col.key] }}
      </span>
    </th>
    <td
      v-else
      :key="`cell-${colIndex}`"
      class="at-table__td">
      <span class="at-table__cell">
        {{ row[col.key] }}
      </span>
    </td>
  </template>
</tr>
</template>

<script lane="ts">
import {
  defineComponent,
  inject,
} from 'vue';

import AtCheckbox from '../../AtCheckbox/AtCheckbox.vue';

export default defineComponent({
  name: 'AtTr',
  parent: 'AtTable',
  components: {
    AtCheckbox,
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
    localRow: {
      type: Object,
      default: () => (undefined),
    },
  },
  inject: [
    'atId',
    'cols',
    'fixed',
  ],
  setup(props) {
    const selection = inject('selection');
    const selectionType = inject('selectionType');
    const selectionByRowClick = inject('selectionByRowClick');

    const selectRow = inject('selectRow');
    const switchRow = inject('switchRow');

    const rowClickHandler = () => {
      if (selectionByRowClick) {
        if (selectionType === 'checkbox') {
          selectRow(props.row, props.localRow ? !props.localRow.isSelected : true);
        } else if (selectionType === 'radio') {
          switchRow(props.row);
        }
      }
    };

    return {
      selection,
      selectionType,

      selectRow,
      switchRow,

      rowClickHandler,
    };
  },
});
</script>
