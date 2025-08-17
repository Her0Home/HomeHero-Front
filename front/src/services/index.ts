import axios from "axios";

export const axiosApiBack=  axios.create({
  baseURL: process.env.API_URL,
})