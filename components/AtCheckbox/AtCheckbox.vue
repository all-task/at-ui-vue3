<template>
  <label
    class="at-checkbox"
    :class="{
      'at-checkbox--checked': checked,
      'at-checkbox--indeterminate': indeterminate,
      'at-checkbox--disabled': disabled,
    }"
  >
    <span class="at-checkbox__symbol">
      <input
        class="at-checkbox__original"
        type="checkbox"
        :name="name"
        :checked="checked"
        @focus="onFocus"
        @blur="onBlur"
        @click="onClick"
        @change.stop="onChange"
      />
    </span>
    <span
      v-if="label !== undefined"
      class="at-checkbox__label"
    >{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import uid from 'uid';

export default defineComponent({
  name: 'AtCheckbox',
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    name: {
      type: String,
      default: undefined,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup(props, context) {
    return {
      onFocus() {
        context.emit('focus');
      },
      onBlur() {
        context.emit('blur');
      },
      onClick(event: MouseEvent) {
        context.emit('click', event);
      },
      onChange(event: MouseEvent) {
        context.emit('update:checked', (event?.target as HTMLInputElement).checked);
        context.emit('change', (event?.target as HTMLInputElement).checked);
      },
    };
  },
});
</script>
