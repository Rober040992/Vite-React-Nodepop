// import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import AdvertsPage from './pages/adverts/AdvertsPage'
import AdvertDetail from './pages/adverts/AdvertDetailPage'
import NewAdvertPage from './pages/adverts/NewAdvertPage'
import NotFoundPage from './pages/NotFound404'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/adverts" />} />     {/* Redirige automáticamente a /adverts usando el componente <Navigate /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/adverts" element={<AdvertsPage />} />
            <Route path="/adverts/:id" element={<AdvertDetail />} />
            <Route path="/adverts/new" element={<NewAdvertPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default App
