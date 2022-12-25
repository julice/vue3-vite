<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';

let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' },
});

let emits = defineEmits(['update:modelValue']);

let rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - num.value, 10 - num.value));

const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
};
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`;
});

const num = ref(props.modelValue);

function handleAdd() {
  if (num.value > 0) {
    num.value--;
  }
  console.log(num.value, 22);
  emits('update:modelValue', num.value);
}
</script>
<template>
  <div :style="fontstyle" @click="handleAdd">
    {{ rate }}
  </div>
</template>

<style lang="scss" scoped></style>
