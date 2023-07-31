import React from 'react'
import './Style.css'

const SignOut = () => {
    localStorage.removeItem("logged")
    window.location.replace('/login');

    return
}

export default SignOut