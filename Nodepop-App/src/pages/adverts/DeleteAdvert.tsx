import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from './service'

function DeleteAdvert({ advertId }: { advertId: string }) {
    const navigate = useNavigate()
    const [isDeleting, setIsDeleting] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            await deleteAdvert(advertId)
            navigate('/adverts')
        } catch (error) {
            console.error('Error deleting advert:', error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setShowConfirm(true)}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition disabled:opacity-50"
            >
                Delete Advert
            </button>

            {showConfirm && (
                <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                    <p className="text-lg text-gray-300">Are you sure?</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition disabled:opacity-50"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => setShowConfirm(false)}
                            className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeleteAdvert
