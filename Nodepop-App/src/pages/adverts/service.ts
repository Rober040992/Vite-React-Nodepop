import { client } from '../../client/client'
import { Advert } from './type'

const advertsUrl = '/api/v1/adverts'

export const getLastestAdverts = async () => {
    try {
        const token = localStorage.getItem('accessToken') // Recuperamos el token
        if (!token) throw new Error('No authentication token found')

        const response = await client.get<Advert[]>(advertsUrl, {
            headers: {
                Authorization: `Bearer ${token}`, // Agregamos el token en la cabecera
            },
        })
        return response.data
    } catch (error) {
        console.error('Adverts loading failed', error)
        throw new Error('Adverts failed')
    }
}
