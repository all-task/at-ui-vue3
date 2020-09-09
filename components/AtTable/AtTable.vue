<template>
<div
  :id="atId"
  :class="{
      [atId]: true,
      'at-table': true,
      [`at-table--size-${size}`]: size !== 'normal',
      'at-table--border': border,
      'at-table--striped': striped,
      'at-table--hide-header': !header,
      'at-table--fixed': fixed,
      'at-table--hide-selection': selection && selection.hide,
      'at-table--highlight-selected': selection && selection.highlight,
      [`at-table--${runing}`]: runing,
    }">
  <table
    class="at-table__table"
    :style="{
        width: width ? `${width}px` : undefined,
      }">
    <at-thead
      :header="header"
      :is-selected-all="isSelectedAll" />
    <at-tbody :local-rows="localRows" />
    <at-tfoot v-if="false" />
  </table>
</div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  computed,
  nextTick,

  isProxy,
  toRaw,
} from 'vue';

import uid from 'uid';

import AtThead from './components/AtThead.vue';
import AtTbody from './components/AtTbody.vue';
import AtTfoot from './components/AtTfoot.vue';

const sizeBase = 8;
const selectionColumnWidth = 34;
const defaultFixedWidth = 100;

export default defineComponent({
  name: 'AtTable',
  components: {
    AtThead,
    AtTbody,
    AtTfoot,
  },
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
      // validator: (id) => /(?!-)^[a-z|-]+(?<!-)$/g.test(id),
    },
    rows: {
      type: Array,
      required: true,
      default: () => ([]),
      // validator: (rows) => {
      //   console.log('AtTable Data:', rows);
      //   return true;
      // },
    },
    columns: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
      validator: (size) => ['extra', 'large', 'normal', 'mini'].includes(size),
    },
    border: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    header: {
      type: [Boolean, Object],
      default: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    selection: {
      type: [Boolean, Object],
      default: false,
    },
    selected: {
      type: Array,
      default: () => ([]),
    },
  },

  setup(props, context) {
    const isSelectedAll = ref(false);
    const runing = ref(false);
    const localRows = reactive({});

    const cols = computed(() => {
      let { columns } = props;
      const border = props.border ? 1 : 0;
      if (props.fixed) {
        let left = sizeBase
          + (props.selection && !props.selection.hide ? (selectionColumnWidth + border) : 0);
        let foundLastFixedRight = false;
        columns = columns.reduce((acc, cur) => {
          const col = cur;
          if (col.fixed === 'left') {
            col.left = left;
            if (col.width !== undefined) {
              left += (col.width + border);
            } else {
              left += (defaultFixedWidth + border);
              throw new Error('The width of fixed column is required.');
            }
          }
          if (!foundLastFixedRight && col.fixed === 'right') {
            foundLastFixedRight = true;
            col.lastFixedRight = true;
          }
          acc.push(col);
          return acc;
        }, []);
        let right = 0;
        let foundLastFixedLeft = false;
        columns = columns.reduceRight((acc, cur) => {
          const col = cur;
          if (col.fixed === 'right') {
            col.right = right;
            if (col.width !== undefined) {
              right += (col.width + border);
            } else {
              right += (defaultFixedWidth + border);
              throw new Error('The width of fixed column is required.');
            }
          }
          if (!foundLastFixedLeft && col.fixed === 'left') {
            foundLastFixedLeft = true;
            col.lastFixedLeft = true;
          }
          acc.push(col);
          return acc;
        }, []).reverse();
      }
      return columns;
    });

    const width = computed(() => (
      cols.value.reduce((acc, cur) => (acc + Number(cur.width)), 16) || undefined
    ));

    const selectedRows = computed(() => (
      Object.values(localRows)
        .filter((row) => (row.isSelected === true))
        .map((row) => (row.pointer))
    ));

    const selectRowWithoutEvent = (row, state) => {
      if (localRows[row.id] === undefined) {
        localRows[row.id] = {
          pointer: row,
          isSelected: state,
        };
      } else {
        localRows[row.id].isSelected = state;
      }
    };

    const updateIsSelectedAll = () => {
      if (selectedRows.value.length === 0) {
        isSelectedAll.value = false;
      } else if (selectedRows.value.length === props.rows.length) {
        isSelectedAll.value = true;
      } else {
        isSelectedAll.value = 'indeterminate';
      }
    };

    const selectAll = async (state) => {
      isSelectedAll.value = state;
      runing.value = state ? 'selecting-all' : 'deselecting-all';
      props.rows.forEach((row) => {
        selectRowWithoutEvent(row, state);
      });
      await nextTick();
      runing.value = false;
      context.emit('select-all', state);
      context.emit('change', selectedRows.value);
      context.emit('update:selected', selectedRows.value);
    };

    const selectRow = (row, state) => {
      selectRowWithoutEvent(row, state);
      updateIsSelectedAll();
      context.emit('select', row, state);
      context.emit('change', selectedRows.value);
      context.emit('update:selected', selectedRows.value);
    };

    const switchRow = (row) => {
      if (selectedRows.value.length) selectRowWithoutEvent(selectedRows.value[0], false);
      selectRowWithoutEvent(row, true);
      context.emit('select', true, row);
      context.emit('change', selectedRows.value);
      context.emit('update:selected', selectedRows.value);
    };

    const init = async () => {
      if (props.selected && Array.isArray(props.selected) && props.selected.length) {
        if (props.selection.type === undefined || props.selection.type === 'checkbox') {
          props.selected.forEach((row) => {
            if (props.rows.includes(isProxy(row) ? toRaw(row) : row)) {
              selectRowWithoutEvent(row, true);
            }
          });
          updateIsSelectedAll();
        } else if (props.selection.type === 'radio') {
          selectRowWithoutEvent(props.selected[0], true);
          if (props.selected.length > 1) {
            await nextTick();
            context.emit('change', selectedRows.value);
            context.emit('update:selected', selectedRows.value);
          }
        }
      }
    };

    init();

    return {
      isSelectedAll,
      runing,
      localRows,

      cols,
      width,
      selectedRows,

      selectAll,
      selectRow,
      switchRow,
    };
  },

  provide() {
    const provide = {};
    Object.defineProperties(provide, {
      atId: {
        enumerable: true,
        get: () => this.atId,
      },
      rows: {
        enumerable: true,
        get: () => this.rows,
      },
      cols: {
        enumerable: true,
        get: () => this.cols,
      },
      fixed: {
        enumerable: true,
        get: () => this.fixed,
      },
      selection: {
        enumerable: true,
        get: () => Boolean(this.selection),
      },
      selectionHide: {
        enumerable: true,
        get: () => (this.selection && this.selection.hide ? this.selection.hide : false),
      },
      selectionType: {
        enumerable: true,
        get: () => (this.selection && this.selection.type ? this.selection.type : 'checkbox'),
      },
      selectionByRowClick: {
        enumerable: true,
        get: () => (this.selection && this.selection.rowClick ? this.selection.rowClick : false),
      },
      selectAll: {
        enumerable: true,
        value: this.selectAll,
      },
      selectRow: {
        enumerable: true,
        value: this.selectRow,
      },
      switchRow: {
        enumerable: true,
        value: this.switchRow,
      },
    });
    return provide;
  },
});
</script>

<style lang="scss">
@import './AtTable.scss';
</style>
