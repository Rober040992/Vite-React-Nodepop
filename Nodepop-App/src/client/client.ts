import axios from 'axios'

// Creamos una instancia de Axios con una configuración predefinida
export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})