import React, { useState, useEffect } from 'react'
import { getUsersAction } from 'actions/users'
import Header from './Header'

function Users() {
  const [users, setUsers] = useState([])

  async function onGetUsers() {
    const { data, error } = await getUsersAction()
    // eslint-disable-next-line no-alert
    if (error) return alert(error)
    return setUsers(data)
  }

  useEffect(() => {
    onGetUsers()
  }, [])

  return (
    <>
      <Header />
      <h1>Lista de Usuários</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <strong>Email:</strong>
              {` ${user.email}`}
            </div>
            <div>
              <strong>Função:</strong>
              {`${user.roles.map((role) => `${role} \n`)}`}
            </div>
            <br />
          </div>
        )
      })}
    </>
  )
}

export default Users
