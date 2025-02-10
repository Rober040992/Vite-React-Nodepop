import type { Advert } from './type'

interface Props {
    advert: Advert
}

const Advert = ({ advert }: Props) => {
    const { name, sale, price, tags, photo } = advert
    return (
        <div>
            <div>
                <img src={photo} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{sale ? 'For Sale' : 'To Buy'}</p>
                <p>${price}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Advert
