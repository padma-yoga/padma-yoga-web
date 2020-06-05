import React from 'react'
import { useHistory } from 'react-router-dom'
import { Toolbar, Typography, AppBar, Button } from '@material-ui/core'
import styles from './styles'

export default function MenuAppBar() {
  const classes = styles()
  const { push } = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Padma Yoga
          </Typography>
          <Button color="inherit" onClick={() => push('/users')}>
            Users
          </Button>
          <Button color="inherit" onClick={() => push('/about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => push('/contact')}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => push('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => push('/register')}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
