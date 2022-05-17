import axios from "axios";

const api = axios.create({
  baseURL: 'https://6283fcc33060bbd347330cbf.mockapi.io/api',
});

api.interceptors.request.use(async (config: any) => {
  const token = '';

  if (token) {
    config.headers.common = { Authorization: `Bearer ${token}` };
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})

export default api;