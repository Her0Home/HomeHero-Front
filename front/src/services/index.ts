import axios from "axios";
export const axiosApiBack=  axios.create({
  baseURL: process.env.API_URL
})

export const axiosApiBack2=  axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})