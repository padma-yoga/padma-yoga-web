import React, { useState } from 'react'
import { loginUserAction } from 'actions/auth'

function Login() {
  const [email, setEmail] = useState('vitoria@gmail.com')
  const [password, setPassword] = useState('Vitoria123@')

  function onChangeField(event) {
    const { name, value } = event.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  async function onRegister() {
    const information = { email, password }
    try {
      const { data, error } = await loginUserAction(information)
      if (error) return alert('error')
      console.log(data.token)
      return console.log(data.user)
    } catch (error) {
      return console.log(error)
    }
  }
  return (
    <>
      <h1> Login do Aluno </h1>
      <form>
        Email:
        <input
          name="email"
          value={email}
          onChange={(e) => onChangeField(e)}
          type="email"
          placeholder="Digite o Email"
        />
        Senha:
        <input
          onChange={(e) => onChangeField(e)}
          value={password}
          name="password"
          type="password"
          placeholder="Digite a Senha"
        />
        <button onClick={onRegister} type="button">
          Entrar
        </button>
      </form>
    </>
  )
}

export default Login
