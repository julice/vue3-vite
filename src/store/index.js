import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      count: 3,
    };
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 1000);
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
});
export default store;
