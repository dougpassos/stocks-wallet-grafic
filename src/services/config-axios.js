import axios from 'axios';

const configAxios = axios.create({
  baseURL: "https://brapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { configAxios };