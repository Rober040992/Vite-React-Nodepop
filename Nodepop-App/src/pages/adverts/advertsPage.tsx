import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getLastestAdverts } from './service'
import { Advert as AdvertType } from './type'
import Advert from './Advert'

function AdvertsPage() {
    const navigate = useNavigate()
    const [adverts, setAdverts] = useState<AdvertType[]>([])
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        navigate('/login')
    }

    useEffect(() => {
        getLastestAdverts().then((response) => {
            setAdverts(response)
        })
    }, [])

    return (
        <div className="advertsPage">
            <div>
                {adverts.map((advert) => (
                    <ul key={advert.id}>
                        <Advert advert={advert}></Advert>
                    </ul>
                ))}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AdvertsPage
