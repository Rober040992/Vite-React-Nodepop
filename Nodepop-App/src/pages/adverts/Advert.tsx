import type { Advert } from './type'
import { Link } from 'react-router-dom'

interface Props {
    advert: Advert
}

const Advert = ({ advert }: Props) => {
    const { name, sale, price, tags } = advert
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{sale ? 'For Sale' : 'To Buy'}</p>
                <p>${price}</p>
                <div className="">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                    <Link to={`/adverts/${advert.id}`}>
                        <button>Check me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Advert
