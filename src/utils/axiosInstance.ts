import axios from "axios";
import {
  getAccessToken,
  isAccessTokenExpired,
  refreshAccessToken,
} from "@services/AuthService";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = getAccessToken();

    if (accessToken) {
      const isTokenExpired = isAccessTokenExpired();

      if (isTokenExpired) {
        // Refresh access token
        try {
          const response = await refreshAccessToken();
          accessToken = response.accessToken;
        } catch (error) {
          // Handle error while refreshing access token
          console.error(error);
        }
      }
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
