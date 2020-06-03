import React, { useState } from 'react'
import { loginUserAction } from 'actions/auth'

import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import axios from '../../api/index'

import TextField from 'components/TextField'
import Toast from 'components/Toast'
import Button from 'components/Button'
import Copyright from 'components/Copyright'
import { registerUserAction } from 'actions/auth'
import { validateFields } from 'helpers/registerValidations'
import styles from './styles'

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

      alert('Login efetuado com Sucesso!')
      return console.log(data.user)
    } catch (error) {
      return alert('ERRO de login!')
    }
  }
  const classes = styles()
  return (
    <>
      <Grid container className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography variant="h2">Login do aluno/a</Typography>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <div className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => onChangeField(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Senha"
                    type="password"
                    placeholder="Digite a senha"
                    value={password}
                    onChange={(e) => onChangeField(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    label="Entrar"
                    onClick={onRegister}
                    // disabled={!completeFields}
                  />
                  <Grid container>
                    <Grid item xs>
                      <Link href="/" variant="body2">
                        Esqueceu sua senha?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/" variant="body2">
                        Já tem uma conta?
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        {/*  <Toast message={'Logou certo'} />*/}
      </Grid>
      }
    </>
  )
}

export default Login
