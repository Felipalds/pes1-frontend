import React from 'react'
import './Style.css'
import axios from 'axios'
import SignUpForm from '../signUp/SignUpForm'

const LoginForm = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('') 


    const redirectToNewPath = () => {
        window.location.replace('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = {
            email, password
        }
        console.log(body)
        try {
            axios.post("http://localhost:3001/user/login", body).then(res => {

                if(res.data === false) {
                    alert("Dados incorretos!")
                }
                else {
                    localStorage.setItem("logged", res.data)
                    {redirectToNewPath()}
                }
            })
        } catch(e){
            console.error(e)
        }
    }

        
    return (
        <>
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
        </>
    )
}

export default LoginForm