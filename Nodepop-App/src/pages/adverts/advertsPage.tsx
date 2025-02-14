import { useState, useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLastestAdverts } from './service'
import { Advert as AdvertType } from './type'
import Advert from './Advert'

const NoAdverts = () => (
    <div className="noAdverts">
        <h2>No Adverts at the moment 😢</h2>
        <p>You can 👇</p>
        <Link to="/adverts/new">
            <button>Create a new Advert</button>
        </Link>
    </div>
)

function AdvertsPage() {
    const navigate = useNavigate()
    const [adverts, setAdverts] = useState<AdvertType[]>([])
    const [filters, setFilters] = useState({
        name: '',
        sale: 'all',
        minPrice: '',
        maxPrice: '',
        tags: [] as string[],
    })

    useEffect(() => {
        getLastestAdverts().then((response) => {
            setAdverts(response)
        })
    }, [])

    const handleFilterChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }

    const handleTagChange = (tag: string) => {
        setFilters((prev) => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter((t) => t !== tag)
                : [...prev.tags, tag],
        }))
    }

    const filteredAdverts = useMemo(() => {
        return adverts.filter((advert) => {
            const matchesName = filters.name
                ? advert.name.toLowerCase().includes(filters.name.toLowerCase())
                : true
            const matchesSale =
                filters.sale === 'all'
                    ? true
                    : advert.sale.toString() === filters.sale
            const matchesPrice =
                (!filters.minPrice ||
                    advert.price >= Number(filters.minPrice)) &&
                (!filters.maxPrice || advert.price <= Number(filters.maxPrice))
            const matchesTags =
                filters.tags.length === 0 ||
                filters.tags.every((tag) => advert.tags.includes(tag))
            return matchesName && matchesSale && matchesPrice && matchesTags
        })
    }, [adverts, filters])

    return (
        <div className="min-h-screen flex flex-col bg-black text-white p-8">
            <div className="self-end px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                <Link to="/adverts/new">
                    <button>Create a new Advert</button>
                </Link>
            </div>
            <button
                onClick={() => navigate('/login')}
                className="self-end px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition"
            >
                Logout
            </button>

            <div className="p-4 bg-gray-800 rounded-lg mt-4">
                <h3 className="text-xl mb-2">Filters</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Search by name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    className="p-2 rounded bg-gray-700 text-white w-full mb-2"
                />
                <select
                    name="sale"
                    value={filters.sale}
                    onChange={handleFilterChange}
                    className="p-2 rounded bg-gray-700 text-white w-full mb-2"
                >
                    <option value="all">All</option>
                    <option value="true">For Sale</option>
                    <option value="false">Wanted</option>
                </select>
                <div className="flex gap-2">
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min price"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        className="p-2 rounded bg-gray-700 text-white w-full"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max price"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        className="p-2 rounded bg-gray-700 text-white w-full"
                    />
                </div>
                <div className="mt-2">
                    <h4 className="text-lg">Tags</h4>
                    {['motor', 'work', 'lifestyle', 'mobile'].map((tag) => (
                        <label
                            key={tag}
                            className="inline-flex items-center mr-2"
                        >
                            <input
                                type="checkbox"
                                checked={filters.tags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                                className="mr-1"
                            />
                            {tag}
                        </label>
                    ))}
                </div>
                <button
                    onClick={() =>
                        setFilters({
                            name: '',
                            sale: 'all',
                            minPrice: '',
                            maxPrice: '',
                            tags: [],
                        })
                    }
                    className="mt-2 p-2 bg-red-500 rounded w-full"
                >
                    Reset Filters
                </button>
            </div>

            {filteredAdverts.length ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 w-full max-w-7xl mx-auto">
                    {filteredAdverts.map((advert) => (
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
