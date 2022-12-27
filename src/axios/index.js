import axios from 'axios';

const service = axios.create({
  timeout: 20000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

service.interceptors.request.use(
  (res) => {
    const config = res;
    const { headers } = config;
    const { url } = config;
    const params = config.params || {};
    const data = config.data || {};
    res.url = res.url || '';
    headers.scid = 'sc9526AF69EEC9FE3B';
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    const { errcode, errmsg } = res.data;
    if (errcode === '0000') {
      return res;
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
