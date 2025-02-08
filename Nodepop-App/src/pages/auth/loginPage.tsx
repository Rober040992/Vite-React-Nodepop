import { useState } from 'react'
import { loginUser } from './service';
import RememberMeCheckbox from "../../components/Checkbox";

function LoginPage() {
    const [rememberMe, setRememberMe] = useState(false);
    /* capturar valores de los inputs */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    /* controlando el submit */
    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() 
        try {
            const userData =  await loginUser({
                email,
                password
            }) //pasamos el body
            console.log(`input´s value ${email} - ${password}`);
            localStorage.setItem('accessToken', userData.accessToken); // guardamos el token en local
            console.log(userData)
            
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
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
                <RememberMeCheckbox rememberMe={rememberMe} setRememberMe={setRememberMe} />
            </form>
        </div>
    )
}

export default LoginPage
