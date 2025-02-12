import type { Advert } from './type'
import { Link } from 'react-router-dom'

interface Props {
    advert: Advert
}

const Advert = ({ advert }: Props) => {
    const { name, sale, price, tags } = advert
    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-300">{sale ? 'For Sale' : 'To Buy'}</p>
            <p className="text-gray-300">${price}</p>
            <div className="flex gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-700 px-2 py-1 text-sm rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <Link to={`/adverts/${advert.id}`} className="mt-4">
                <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                    Check me
                </button>
            </Link>
        </div>
    )
}

export default Advert
