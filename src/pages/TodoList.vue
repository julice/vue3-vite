<script setup>
import useTodos from './todolist';
const { title, list, addTodo, clear, active, all, allDone } = useTodos();
</script>
<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">clear</button>
    <ul v-if="list.length">
      列表
      <li v-for="item in list" :class="{ done: item.done }" :key="item.titlee">
        {{ item.title }}
      </li>
    </ul>
    <div v-else>no data</div>
    <div>
      全选
      <input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
