import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getLastestAdverts } from './service'
import { Advert as AdvertType } from './type'
import Advert from './Advert'

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
        <div className="min-h-screen flex flex-col bg-black text-white p-8">
            <div className="self-end px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                <Link to="/adverts/new">
                    <button>Create a new Advert</button>
                </Link>
            </div>
            <button
                onClick={handleLogout}
                className="self-end px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition"
            >
                Logout
            </button>

            {adverts.length ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 w-full max-w-7xl mx-auto">
                    {adverts.map((advert) => (
                        <Advert key={advert.id} advert={advert} />
                    ))}
                </div>
            ) : (
                <NoAdverts />
            )}
        </div>
    )
}

export default AdvertsPage
