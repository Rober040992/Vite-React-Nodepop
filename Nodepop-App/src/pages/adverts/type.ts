export interface Advert {
    id: number
    name: string
    price: number
    sale: boolean
    tags: string[]
    photo?: string
}

export interface AdvertPost {
    name: string
    sale: boolean
    price: number
    tags: string[]
    photo?: File
}

export interface AdvertContent {
    content: string
}
