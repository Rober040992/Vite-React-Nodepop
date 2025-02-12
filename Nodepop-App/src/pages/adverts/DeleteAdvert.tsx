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
        <div>
            <button onClick={() => setShowConfirm(true)} disabled={isDeleting}>
                Delete Advert
            </button>

            {showConfirm && (
                <div>
                    <p>Are you sure?</p>
                    <button onClick={handleDelete} disabled={isDeleting}>
                        Yes
                    </button>
                    <button onClick={() => setShowConfirm(false)}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    )
}

export default DeleteAdvert
