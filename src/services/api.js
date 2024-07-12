import axios from "axios";

const api = axios.create({
  baseURL: "https://applylog-server.onrender.com",
});

// Set JWT token in the Authorization header for all requests
const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
