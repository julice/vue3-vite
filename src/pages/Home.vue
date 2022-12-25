<script setup>
import { ref } from 'vue';
import TodoListVue from './TodoList.vue';
import Rate from '../components/Rate.vue';
const color = ref('red');
const score = ref(3);
function onupdaterate(num) {
  console.log(num);
}
</script>
<template>
  <TodoListVue />
  <p>{{ score }}</p>
  <Rate v-model="score" theme="yellow" @update-rate="onupdaterate" />
</template>

<style lang="scss" scoped>
.text {
  color: v-bind(color);
}
</style>
