import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
            <h1 className="text-4xl font-bold mb-4">😕 404 - Page Not Found</h1>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <strong className="text-lg text-gray-300">
                    Ahhhh! I’ve catched you 👉
                </strong>
                <div className="mt-4">
                    <Link to="/">
                        <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                            Back to see the Adverts
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
