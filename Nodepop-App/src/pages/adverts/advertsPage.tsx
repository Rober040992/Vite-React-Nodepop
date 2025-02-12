import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getLastestAdverts } from './service'
import { Advert as AdvertType } from './type'
import Advert from './Advert'
import './AdvertsPage.css'

const NoAdverts = () => (
    <div className="noAdverts">
        <h2>NO Adverts at the moment 😢</h2>
        <p>you can 👇</p>
        <Link to="/adverts/new">
            <button>Create a new Advert</button>
        </Link>
    </div>
)

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
        <div>
            <button onClick={handleLogout}>Logout</button>
            {adverts.length ? (
                <div>
                    {adverts.map((advert) => (
                        <ul className="advertsPage" key={advert.id}>
                            <Advert advert={advert}></Advert>
                        </ul>
                    ))}
                </div>
            ) : (
                <NoAdverts />
            )}
        </div>
    )
}

export default AdvertsPage
