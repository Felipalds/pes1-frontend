import React from 'react'
import './Style.css'
import axios from 'axios'

const LoginForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = {
            email, password
        }
        console.log(body)
        try {
            axios.post("http://localhost:3333/login", body).then(res => {
                console.log(res)
            })
        } catch(e){
            console.error(e)
        }
    }

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('') 
        
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Digite seu e-mail</label>
            <input 
                id="email"
                type="email" 
                value={email} 
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
            >
            </input>

            <label htmlFor='password'>Digite sua senha</label>
            <input
                id="password"
                type="password"
                value={password}
                placeholder="Senha"
                onChange={event => setPassword(event.target.value)}
            >
            </input>

            <button type="submit" disabled={email.length === 0 || password.length < 6}>Entrar</button>
        </form>
    )
}

export default LoginForm