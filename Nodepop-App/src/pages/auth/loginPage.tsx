import { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState('')
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const [password, setPassword] = useState('')
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="email"> Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <label htmlFor="password"> Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default LoginPage
