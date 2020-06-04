import React, { useState, useEffect } from 'react'
import { getUsersAction } from 'actions/users'
import Header from './Header'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  const classes = useStyles()

  return (
    <>
      <Header />
      <div align="center">
        {' '}
        <h1>Lista de Usuários</h1>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Função</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left" component="th" scope="row">
                  {user.roles}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Users
