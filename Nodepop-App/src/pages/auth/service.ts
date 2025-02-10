import { client } from '../../client/client'

export interface Credentials {
    email: string
    password: string
}
export interface Login {
    accessToken: string
}
export async function loginUser(credentials: Credentials) {
    try {
        const response = await client.post<Login>(
            '/api/auth/login',
            credentials
        ) //si las credenciales son correctas la api devuelve un token y pasa al return
        console.log(`Login successful`)
        return response.data // Retornamos la data para usarla en LoginPage.tsx
    } catch (error) {
        console.error('Login failed')
        throw new Error('Login failed')
    }
}
