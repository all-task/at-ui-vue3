<template>
<section
  id="selection-options"
  class="section section-at-table-selection-type-radio">
  <ExampleContainer title="Selection Options">
    <at-radio-group
      v-model:checked="highlight"
      label="Highlight Selected Rows"
      :options="highlightOptions" />
    <br>
    <at-table
      v-model:selected="selected_e1"
      :rows="data"
      :columns="columns"
      border
      striped
      fixed
      :selection="{
          highlight,
          rowClick: true,
        }"
      style="
          height: 380px;
        " />
    <p>
      Current Selected:
      [ {{ selected_e1.map((row) => (row.id)).join(', ') }} ]
    </p>
  </ExampleContainer>
  <ExampleContainer title="Selection Type Radio">
    <at-radio-group
      v-model:checked="hide"
      label="Hide Selection"
      :options="hideOptions" />
    <br>
    <at-table
      v-model:selected="selected_e2"
      :rows="data"
      :columns="columns"
      fixed
      :selection="{
          type: 'radio',
          hide,
          highlight: true,
          rowClick: true,
        }"
      style="
          height: 384px;
        " />
    <p>
      Current Selected:
      [ {{ selected_e2.map((row) => (row.id)).join(', ') }} ]
    </p>
  </ExampleContainer>
</section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

import dataSource from './dataSource';

export default defineComponent({
  name: 'AtTableSelectionoptions',
  setup() {
    const hide = ref(false);
    const highlight = ref(true);
    // eslint-disable-next-line camelcase
    const selected_e1 = ref(dataSource.slice(4, 8));
    // eslint-disable-next-line camelcase
    const selected_e2 = ref(dataSource.slice(4, 6));

    return {
      hideOptions: [
        {
          label: 'Hide',
          value: true,
        },
        {
          label: 'Show',
          value: false,
        },
      ],
      hide,
      highlightOptions: [
        {
          label: 'Highlight',
          value: true,
        },
        {
          label: 'Normal',
          value: false,
        },
      ],
      highlight,
      columns: [
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
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
      data: dataSource.slice(0, 32),
      selected_e1,
      selected_e2,
    };
  },
});
</script>
