import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Advert as AdvertType } from './type'
import { getAdvert } from './service'
import { isApiClientError } from '../../client/client'
import { Link } from 'react-router-dom'
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
        <div className="advert-detail-container">
            {advert ? (
                <div className="advert-detail">
                    <div>
                        <Link to="/">
                            <button> Back to see the Adverts </button>
                        </Link>
                    </div>
                    <img
                        src={advert.photo || 'https://placehold.co/200x100'}
                        alt={advert.name}
                    />
                    <h2>{advert.name}</h2>
                    <p>{advert.sale ? 'For Sale' : 'Wanted'}</p>
                    <p>Price: ${advert.price}</p>
                    <div className="advert-tags">
                        {advert.tags.map((tag, index) => (
                            <span key={index} className="advert-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading advert details...</p>
            )}
        </div>
    )
}

export default AdvertPage
