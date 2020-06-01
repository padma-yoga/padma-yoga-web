import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import TextField from 'components/TextField'
import Button from 'components/Button'
import Copyright from 'components/Copyright'
import { registerUserAction } from 'actions/auth'
import styles from './styles'

function Register() {
  const [information, setInformation] = useState({})
  const [fieldError, setFieldError] = useState([])

  const classes = styles()

  function onChangeField(event) {
    const { name, value } = event.target

    validateFields()

    console.log(hasError(name))

    if (hasError(name)) {
      const teste = fieldError.filter((arr) => arr.name === name)[0]
      console.log(teste)

      setFieldError([])
    }

    setInformation({ ...information, [name]: value })
    // if (!fieldError.length) {
    // }
    // return information
  }

  function handleErrorMsg(key) {
    return fieldError.filter((arr) => arr.name === key)[0]?.msg
  }

  function hasError(key = '') {
    if (!key) return fieldError.length
    return !!fieldError.filter((arr) => arr.name === key)[0]
  }

  function error(name, msg) {
    return setFieldError((fieldError) => [...fieldError, { name, msg }])
  }

  function validateFields() {
    const { email, password, passwordConfirmation } = information

    // if (!name) error('name', 'Campo obrigatório')
    // if (!surname) error('surname', 'Campo obrigatório')
    if (!email) error('email', 'Campo obrigatório')
    if (!password) error('password', 'Campo obrigatório')
    if (!passwordConfirmation)
      error('passwordConfirmation', 'Campo obrigatório')

    if (password !== passwordConfirmation)
      error('passwordConfirmation', 'Confirmação da senha não confere!')

    return fieldError
  }

  async function onSubmit() {
    if (fieldError.length) return alert('!!!')

    const { data, error } = await registerUserAction(information)
    console.log('data: ', data)
    console.log('error: ', error)
    if (error) return alert(error.message)

    return alert('Aluno cadastrado com sucesso!')
  }

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h2">Cadastro de aluno/a</Typography>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  label="Nome"
                  autoComplete="fname"
                  helperText={handleErrorMsg('name')}
                  error={hasError('name')}
                  autoFocus
                  onChange={onChangeField}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Sobrenome"
                  name="surname"
                  autoComplete="lname"
                  helperText={handleErrorMsg('surname')}
                  error={hasError('surname')}
                  onChange={onChangeField}
                />
              </Grid> */}

              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  helperText={handleErrorMsg('email')}
                  error={hasError('email')}
                  onChange={onChangeField}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                  helperText={handleErrorMsg('password')}
                  error={hasError('password')}
                  onChange={onChangeField}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="passwordConfirmation"
                  label="Confirmar senha"
                  type="password"
                  autoComplete="current-password"
                  helperText={handleErrorMsg('passwordConfirmation')}
                  error={hasError('passwordConfirmation')}
                  onChange={onChangeField}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  label="Registrar"
                  onClick={onSubmit}
                  disabled={!!hasError()}
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
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Register
