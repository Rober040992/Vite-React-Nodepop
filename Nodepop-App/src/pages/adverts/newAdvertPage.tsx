import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createNewAdvert } from './service'

function NewAdvertPage() {
    const navigate = useNavigate()

    // Estados para cada campo del formulario
    const [name, setName] = useState('')
    const [sale, setSale] = useState<boolean | null>(null)
    const [price, setPrice] = useState<number | ''>('')
    const [tags, setTags] = useState<string[]>([])
    const [photo, setPhoto] = useState<File>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Manejadores de cambios en los inputs
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
    const handleSaleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSale(e.target.value === 'true')
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPrice(e.target.value ? Number(e.target.value) : '')
    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTags((prevTags) =>
            prevTags.includes(value)
                ? prevTags.filter((tag) => tag !== value)
                : [...prevTags, value]
        )
    }
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) setPhoto(e.target.files[0])
    }

    // Validación: habilitar el botón solo si los campos obligatorios están completos
    const isFormValid =
        name.trim() !== '' && sale !== null && price !== '' && tags.length > 0

    // Manejo del envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isFormValid) return

        setLoading(true)
        setError(null)

        try {
            await createNewAdvert({
                name,
                sale,
                price: Number(price),
                tags,
                photo,
            })
            navigate('/adverts') // Redirigir tras éxito
        } catch (err) {
            setError('Error al crear el anuncio. Inténtalo de nuevo.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <Link to="/">
                <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                    Back to see the Adverts
                </button>
            </Link>
            <h1 className="text-2xl font-bold text-center mb-4">CREATE</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Tipo de operación */}
                <fieldset className="p-3 border border-gray-700 rounded">
                    <legend className="text-sm font-semibold text-gray-300">
                        Operation:
                    </legend>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="sale"
                                value="true"
                                checked={sale === true}
                                onChange={handleSaleChange}
                                required
                            />
                            To sell
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="sale"
                                value="false"
                                checked={sale === false}
                                onChange={handleSaleChange}
                                required
                            />
                            To buy
                        </label>
                    </div>
                </fieldset>

                {/* Precio */}
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-300"
                    >
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={handlePriceChange}
                        required
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Tags */}
                <fieldset className="p-3 border border-gray-700 rounded">
                    <legend className="text-sm font-semibold text-gray-300">
                        Tags:
                    </legend>
                    <div className="flex flex-wrap gap-3">
                        {['lifestyle', 'motor', 'work', 'mobile'].map((tag) => (
                            <label
                                key={tag}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    value={tag}
                                    checked={tags.includes(tag)}
                                    onChange={handleTagsChange}
                                />
                                {tag}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Foto */}
                <div>
                    <label
                        htmlFor="photo"
                        className="block text-sm font-medium text-gray-300"
                    >
                        Photo:
                    </label>
                    <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Mensaje de error */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Botón de enviar */}
                <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white font-semibold rounded transition-all"
                >
                    {loading ? 'Creando...' : 'Create it!'}
                </button>
            </form>
        </div>
    )
}

export default NewAdvertPage
