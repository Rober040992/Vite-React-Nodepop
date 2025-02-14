import { client } from '../../client/client'
import { ApiClientError } from '../../client/errors'
import { Advert, AdvertPost } from './type'

const advertsUrl = '/api/v1/adverts'

// trae todos
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
// trae 1
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
        console.log('la response.data de getAdvert', response.data)
        return response.data
    } catch (error: any) {
        // David, perdoname este any 😢 (me estoy volviendo loco)
        if (error.response.status === 404) {
            throw new ApiClientError('Advert not found', 'NOT_FOUND')
        }
    }
}

// elimina 1
export async function deleteAdvert(advertId: string) {
    const token = localStorage.getItem('accessToken')
    if (!token) {
        throw new ApiClientError(
            'No authentication token found',
            'UNAUTHORIZED'
        )
    }
    const url = `${advertsUrl}/${advertId}`
    if (token) {
        await client.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
}

export async function createNewAdvert(advertData: AdvertPost) {
    const token = localStorage.getItem('accessToken')
    if (!token) {
        throw new Error('Unauthorized: No access token found')
    }

    const formData = new FormData()
    formData.append('name', advertData.name)
    formData.append('sale', advertData.sale.toString())
    formData.append('price', advertData.price.toString())
    advertData.tags.forEach((tag) => formData.append('tags', tag))
    if (advertData.photo) {
        formData.append('photo', advertData.photo)
    }

    try {
        const response = await client.post(advertsUrl, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Failed to create advert')
    }
}
