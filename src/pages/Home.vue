<script setup>
import { storeToRefs } from 'pinia';
import { provide, computed } from 'vue';
import { useStore } from '../store/user';

const user = useStore();
let { name, age } = storeToRefs(user);
console.log(user);
user.name = 'xiaofang';
console.log(user);
function onreset() {
  user.$reset();
}
function onpatch() {
  user.$patch({
    name: 'xiaoxiaofang',
  });

  user.createment();
  console.log(user, 'patch');
}
</script>
<template>
  <div>home</div>
  <div>name-{{ name }}</div>
  <div>age-{{ age }}</div>
  <div @click="onreset">reset</div>
  <div @click="onpatch">patch</div>
</template>

<style lang="scss" scoped></style>
