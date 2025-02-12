import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <h1>😕 404 - Page Not Found</h1>
            <div>
                <strong>Ahhhh! I´ve catched you 👉</strong>
                <Link to="/">
                    <button> Back to see the Adverts </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
