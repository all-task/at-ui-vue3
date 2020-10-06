<template>
  <label class="at-input" :class="{
    'at-input--disabled': disabled,
    'at-input--error': error,
    [shape]: shape !== 'rectangle',
    [size]: size !== 'normal',
  }">
    <span v-if="label !== undefined" class="at-input__label">
      {{ label }}
    </span>
    <span class="at-input__border">
      <input
        v-model="localValue"
        class="at-input__original"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @change="onChange" />
    </span>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
} from 'vue';

import uid from 'uid';

export default defineComponent({
  name: 'AtInput',
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    value: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: undefined,
    },
    shape: {
      type: String,
      default: 'rectangle',
      validator: (shape: string) => ['rectangle', 'rounded', 'capsule', 'line'].includes(shape),
    },
    size: {
      type: String,
      default: 'normal',
      validator: (size: string) => ['extra', 'large', 'normal', 'mini'].includes(size),
    },
    minlength: {
    },
    maxlength: {
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const localValue = ref(props.value);

    watch(() => props.value, (newPassingValue) => {
      localValue.value = newPassingValue;
    });

    return {
      localValue,

      onFocus() {
        context.emit('focus');
      },
      onBlur() {
        context.emit('blur');
      },
      onClick(event: MouseEvent) {
        context.emit('click', event);
      },
      onInput(event: MouseEvent) {
        console.log('onInput', localValue.value);
        context.emit('update:value', localValue.value, event);
        context.emit('input', localValue.value, event);
      },
      onChange(event: MouseEvent) {
        console.log('onChange', localValue.value);
        context.emit('update:value', localValue.value, event);
        context.emit('change', localValue.value, event);
      },
    };
  },
});
</script>

<style lang="scss">
  @import './AtInput.scss';
</style>
