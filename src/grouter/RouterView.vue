<script setup>
import { computed } from 'vue-demi';
import { useRouter } from './index';
let router = useRouter();
const comp = computed(() => {
  const route = router.routes.find(
    (route) => route.path === router.current.value
  );
  return route ? route.component : null;
});
</script>

<template>
  <div>
    <component :is="comp"></component>
  </div>
</template>

<style lang="scss" scoped></style>
