import axios from "axios";

export const axiosApiBack=  axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})