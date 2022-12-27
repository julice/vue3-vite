<script setup>
import { defineProps } from 'vue';
let props = defineProps({
  to: { type: String, required: true },
});
</script>

<template>
  <div>
    <a :href="'#' + props.to"><slot /></a>
  </div>
</template>

<style lang="scss" scoped></style>
