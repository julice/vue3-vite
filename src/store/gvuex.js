import { inject, reactive } from 'vue';

const STORE_KEY = '__store__';

function useStore() {
  return inject(STORE_KEY);
}
class Store {
  install(app) {
    app.provide(STORE_KEY, this);
  }
  constructor(options) {
    this._state = reactive({ data: options.state() });
    this._mutations = options._mutations;
  }
  get state() {
    return this._state.data;
  }
  commit = (type, payload) => {
    const entry = this._mutations[type];
    entry && entry(this.state, payload);
  };
}
function createStore(options) {
  return new Store(options);
}

export { createStore, useStore };
