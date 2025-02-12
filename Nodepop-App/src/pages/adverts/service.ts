import { client } from '../../client/client'
import { ApiClientError } from '../../client/errors'
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

export const getAdvert = async (advertId: string) => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
        throw new ApiClientError(
            'No authentication token found',
            'UNAUTHORIZED'
        )
    }

    const url = `${advertsUrl}/${advertId}`

    try {
        const response = await client.get<Advert>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error: any) {
        // David, perdoname este any 😢 (me estoy volviendo loco)
        if (error.response.status === 404) {
            throw new ApiClientError('Advert not found', 'NOT_FOUND')
        }
    }
}
