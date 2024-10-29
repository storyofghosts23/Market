import axios from "axios";

const axion = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export const regi = data => axion.post("/register", data);
export const login = data => axion.post("/login", data);
export const valid = () => axion.get("/validate")