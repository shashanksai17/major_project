import axios from "axios"

const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true // the browser will send cookies to server automatically for every single api call
})

export default axiosInstance;