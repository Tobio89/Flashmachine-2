import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://flashmachine-backend.herokuapp.com/",
});

export default axiosInstance;
