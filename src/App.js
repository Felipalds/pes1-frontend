import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home  from './pages/home/Home'
import Login from './pages/login/Login'
import { NotFound } from './pages/NotFound'
import Footer from './components/footer/Footer'
import Blog from './pages/blog/Blog'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />} />
                <Route path="procedures/:id" element={<Blog />} />
                <Route path="professionals/:id" element={<Blog />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App