<template>
<section
  id="big-array"
  class="section section-at-table-selection-with-big-array">
  <ExampleContainer title="Selection with 2048 Rows">
    <at-table
      v-model:selected="selected"
      :rows="data"
      :columns="columns"
      fixed
      selection
      style="height: 380px;" />
    <p>
      Current Selected:
      [ {{ SelectedId.slice(0, 16).join(', ') }}{{ SelectedId.length > 16 ? ', ....' : '' }} ]
      Total Selected: {{ selected.length }}
    </p>
  </ExampleContainer>
</section>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
} from 'vue';

import dataSource from './dataSourceBigArray';

export default defineComponent({
  name: 'AtTableSelectionWithBigArray',
  setup() {
    const selected = ref([]);
    const SelectedId = computed(() => (selected.value.map((row) => (row.id))));

    return {
      columns: [
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
          fixed: 'left',
        },
        {
          key: 'last_name',
          label: 'Last Name',
          width: 120,
        },
        {
          key: 'email',
          label: 'Email',
          width: 280,
        },
        {
          key: 'phone_number',
          label: 'Phone Number',
          width: 160,
          align: 'right',
        },
        {
          key: 'street_address',
          label: 'Address',
          width: 280,
        },
        {
          key: 'street_address',
          label: 'Address',
          width: 280,
        },
        {
          key: 'city',
          label: 'Cite',
          width: 120,
        },
        {
          key: 'state',
          label: 'State',
          width: 60,
        },
        {
          key: 'zip_code',
          label: 'ZIP Code',
          width: 80,
        },
      ],
      data: dataSource,
      selected,
      SelectedId,
    };
  },
});
</script>
