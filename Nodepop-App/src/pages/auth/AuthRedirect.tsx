import { Navigate } from 'react-router-dom'

function AuthRedirect({children}: {children: React.ReactNode}  ) {
    const token = localStorage.getItem('accessToken')
    return token ? children : <Navigate to="/login" />
}

export default AuthRedirect
