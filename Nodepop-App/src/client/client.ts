import axios from 'axios'
import { ApiClientError } from './errors'

// Creamos una instancia de Axios con una configuración predefinida
export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

export function isApiClientError(error: unknown): error is ApiClientError {
    return error instanceof ApiClientError
}
