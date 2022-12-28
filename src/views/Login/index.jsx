import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import './styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    const auth = {
      email: email,
      senha: pwd
    }

    try {
      const response = await axios.post('http://localhost:3000/login', auth)

      document.cookie = `auth=${response.data.token}; expires=${new Date(2100, 0, 1)}`

      alert('Login realizado!')

      navigate('/home')

    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <h1>Login</h1>
      
      <div className="container">
        <input
          id="email"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          id="pwd"
          type="password"
          placeholder="Senha"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <button onClick={handleLogin}>
          Entrar
        </button>

        <Link to="/register">
          Cadastrar-se
        </Link>
      </div>
    </>
  )
}
export default Login