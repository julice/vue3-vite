import { ref, computed, watchEffect } from 'vue';
import { useStorage } from './useStorage';

function useTodos() {
  let title = ref('');
  let list = ref(useStorage('todos', []));
  function addTodo() {
    if (!title.value) return;
    list.value.push({
      title: title.value,
      done: false,
    });
    title.value = '';
  }
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (val) {
      list.value.forEach((item) => {
        item.done = val;
      });
    },
  });

  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list.value));
  });

  const active = computed(() => {
    return list.value.map((item) => item.done).length;
  });

  const all = computed(() => {
    return list.value.length;
  });

  function clear() {
    list.value = list.value.filter((v) => !v.done);
  }
  return { title, list, addTodo, clear, active, all, allDone };
}

export default useTodos;
