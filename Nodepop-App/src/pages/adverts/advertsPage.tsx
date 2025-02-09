import { useNavigate } from "react-router-dom"

function AdvertsPage() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');
        navigate('/login')
        console.log("localStorage")
    }

    return (
        <div>
            <h1>Adverts Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AdvertsPage
