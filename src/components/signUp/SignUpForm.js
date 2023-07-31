import React from 'react'
import './Style.css'
import axios from 'axios'

const SignUpForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = {
            name, email, password 
        }
        console.log(body)
        try {
            axios.post("http://localhost:3001/user/create", body).then(res => {
                if(res.data === true) {
                    alert("Cadastrado!")
                    window.location.replace('/login');
                } else {
                    alert("Algum erro ocorreu.")
                }
            })
        } catch(e){
            console.error(e)
        }
    }

    
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('') 
        
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Digite seu nome</label>
            <input 
                id="name"
                type="text" 
                value={name} 
                placeholder="Name"
                onChange={event => setName(event.target.value)}
            >
            </input>
            
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

            <button type="submit" disabled={email.length === 0 || password.length < 6 || name.length === 0}>Cadastrar</button>
        </form>
    )
}

export default SignUpForm