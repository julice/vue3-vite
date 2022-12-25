import { watchEffect, ref } from 'vue';

export function useStorage(name, value) {
  const datas = JSON.parse(localStorage.getItem(name)) || value;
  // watchEffect(() => {
  //   localStorage.setItem(name, JSON.stringify(value));
  // });
  console.log(datas, 22233);
  return datas;
}
