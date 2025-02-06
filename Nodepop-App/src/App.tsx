// import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import AdvertsPage from './pages/adverts/advertsPage'
import AdvertDetail from './pages/adverts/advertDetailPage'
import NewAdvertPage from './pages/adverts/newAdvertPage'
import NotFoundPage from './pages/notFound404'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/adverts" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/adverts" element={<AdvertsPage />} />
            <Route path="/adverts/:id" element={<AdvertDetail />} />
            <Route path="/adverts/new" element={<NewAdvertPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default App
