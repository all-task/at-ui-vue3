<template>
  <section
    id="base"
    class="section section-at-table-base">
    <ExampleContainer title="Base">
      <at-table
        :rows="data"
        :columns="columns" />
    </ExampleContainer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

import dataSource from './dataSource';

export default defineComponent({
  name: 'AtTableBase',
  setup() {
    return {
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
        },
        {
          key: 'phone_number',
          label: 'Phone Number',
          width: 160,
          align: 'right',
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
      data: dataSource.slice(0, 8),
    };
  },
});
</script>
