import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Advert as AdvertType } from './type'
import { getAdvert } from './service'
import { isApiClientError } from '../../client/client'
import { Link } from 'react-router-dom'
import DeleteAdvert from './DeleteAdvert'

function AdvertPage() {
    const params = useParams()
    const navigate = useNavigate()
    const [advert, setAdvert] = useState<AdvertType>()

    useEffect(() => {
        if (params.id) {
            getAdvert(params.id)
                .then((advert) => setAdvert(advert))
                .catch((error) => {
                    if (isApiClientError(error)) {
                        if (error.code === 'NOT_FOUND') {
                            navigate('/404')
                        }
                    }
                })
        }
    }, [params.id, navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
            {advert ? (
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl w-full">
                    <div className="flex justify-between mb-6">
                        <Link to="/">
                            <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                                Back to see the Adverts
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={advert.photo || 'https://placehold.co/400x200'}
                            alt={advert.name}
                            className="w-full max-h-64 object-cover rounded-lg"
                        />
                        <h2 className="text-3xl font-semibold mt-4">
                            {advert.name}
                        </h2>
                        <p className="text-lg text-gray-300">
                            {advert.sale ? 'For Sale' : 'Wanted'}
                        </p>
                        <p className="text-xl font-bold mt-2">
                            Price: ${advert.price}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {advert.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-700 px-3 py-1 text-sm rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <DeleteAdvert advertId={params.id!} />
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-xl">Loading advert details...</p>
            )}
        </div>
    )
}

export default AdvertPage
