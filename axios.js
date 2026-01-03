import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/chaithanyas-projects-bea254d5/backend-express/GktVTgfZxDHJSPeLbypBjgF1tTmQ",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
