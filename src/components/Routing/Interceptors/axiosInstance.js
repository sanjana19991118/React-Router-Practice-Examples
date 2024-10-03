import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://api.example.com", // Replace with your API base URL
// });

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

// axios.interceptors.request.use(
//   config => {
//     console.log('Request sent with ', config);
//     return config;
//   }
// )
