import { useState } from 'react'
import { loginUser } from './service'
import RememberMeCheckbox from '../../components/Checkbox'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [rememberMe, setRememberMe] = useState(false)
    /* capturar valores de los inputs */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value)
    }
    /* controlando el submit */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const userData = await loginUser({
                email,
                password,
            }) //pasamos el body
            console.log(`input´s value ${email} - ${password}`)
            // Guardamos el token dependiendo del estado de rememberMe
            if (rememberMe) {
                localStorage.setItem('accessToken', userData.accessToken)
            }
            console.log('user token', userData)
            navigate('/adverts')
        } catch (error) {
            console.error('Login failed', error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-semibold text-center mb-6">Log In</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white"
                />
            </div>
            <RememberMeCheckbox rememberMe={rememberMe} setRememberMe={setRememberMe} />
            <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 mt-4 rounded-lg hover:bg-gray-300 transition"
            >
                Submit
            </button>
        </form>
    </div>
</div>

    )
}

export default LoginPage
