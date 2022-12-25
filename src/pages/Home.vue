<script setup>
import { useStore } from 'vuex';
import { provide, computed } from 'vue';
import injectcom from '../components/injectcom.vue';
const store = useStore();
provide('name', {
  data: 3,
  data2: 33,
});
console.log(store.state.count, 33);
const count = computed(() => store.state.count);
function asyncAdd() {
  store.dispatch('asyncAdd');
}
</script>
<template>
  <div @click="asyncAdd">home</div>
  <div>{{ count }}</div>
  <injectcom />
</template>

<style lang="scss" scoped></style>
