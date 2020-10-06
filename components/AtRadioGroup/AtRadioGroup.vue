<template>
<div
  class="at-radio-group at-group"
  :class="{
      'at-group--disabled': disabled,
      'at-group--column': column,
      [button.shape]: button && button.shape && button.shape !== 'rectangle',
      [button.size]: button && button.size && button.size !== 'normal'
    }">
  <div class="at-group__inner">
    <label
      v-if="label!==undefined"
      class="at-group__label"
    >{{ label }}</label>
    <at-radio
      v-for="(option, index) in options"
      :key="index"
      :name="atId"
      :class="{
        'at-button': button,
        'major': button && checked === option.value,
        'minor': button && checked !== option.value,
        'disabled': button && disabled || option.disabled
      }"
      :checked="checked === option.value"
      :disabled="disabled || option.disabled"
      :label="option.label"
      @change="(checked) => { onChange(option.value, checked); }" />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import uid from 'uid';

import AtRadio from '../AtRadio/AtRadio.vue';

export default defineComponent({
  name: 'AtRadioGroup',
  components: {
    AtRadio,
  },
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    label: {
      type: String,
      default: undefined,
    },
    options: {
      type: Array,
      required: true,
    },
    checked: {
      type: [Boolean, String],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
    button: {
      type: [Boolean, Object],
      default: false,
    },
  },
  setup(props, context) {
    return {
      onChange(optionValue: string) {
        context.emit('update:checked', optionValue);
        context.emit('change', optionValue);
      },
    };
  },
});
</script>
