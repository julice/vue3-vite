<script setup>
import { inject } from 'vue';
const name = inject('name');
console.log(name, 32);
</script>
<template>
  <div>name-- {{ name }}</div>
</template>

<style lang="scss" scoped></style>
