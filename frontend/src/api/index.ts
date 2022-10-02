import axios, { type AxiosInstance } from "axios";

export const $axios: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});
