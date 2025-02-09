// import { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import AdvertDetail from './pages/adverts/AdvertDetailPage'
import NewAdvertPage from './pages/adverts/NewAdvertPage'
import NotFoundPage from './pages/NotFound404'
import AuthRedirect from './pages/auth/AuthRedirect'
import AdvertsPage from './pages/adverts/AdvertsPage'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/adverts" />} />

            <Route
                path="/adverts"
                element={
                    <AuthRedirect>
                        <Outlet />
                    </AuthRedirect>
                }
            >
                <Route  index element={<AdvertsPage/>} />
                <Route path=":id" element={<AdvertDetail />} />
                <Route path="new" element={<NewAdvertPage />} />
            </Route>

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

export default App
