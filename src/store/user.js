import { defineStore } from 'pinia';

export const useStore = defineStore('user', {
  state: () => {
    return {
      name: 'fangxiao',
      age: 30,
    };
  },
  actions: {
    createment() {
      this.age++;
    },
  },
});
