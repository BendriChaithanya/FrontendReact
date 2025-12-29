import axios from "axios";

const api = axios.create({
  baseURL: "backend-express-git-main-chaithanyas-projects-bea254d5.vercel.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
