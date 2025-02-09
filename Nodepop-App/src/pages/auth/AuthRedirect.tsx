import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthRedirect() {
    const navigate = useNavigate();
    const [checkedAuth, setCheckedAuth] = useState(false);

    useEffect(() => {
        if (!checkedAuth) {
            const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
            if (token) {
                navigate('/adverts');
            } else {
                navigate('/login');
            }
            setCheckedAuth(true);
        }
    }, [checkedAuth, navigate]);

    return null;
}

export default AuthRedirect;