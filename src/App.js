import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home  from './pages/home/Home'
import Login from './pages/login/Login'
import { NotFound } from './pages/NotFound'
import Footer from './components/footer/Footer'
import BlogProcedures from './pages/blog/BlogProcedures'
import BlogProfessionals from './pages/blog/BlogProfessionals'

import { AdminValidator } from './pages/adminValidator/AdminValidator'
import SignUpForm from './components/signUp/SignUpForm'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />} />
                <Route path="procedures/:slug" element={<BlogProcedures />} />
                <Route path="professionals/:slug" element={<BlogProfessionals />} />
                <Route path="admin" element={<AdminValidator />} />
                <Route path="signup" element={<SignUpForm />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App