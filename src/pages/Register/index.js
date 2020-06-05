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
import Toast from 'components/Toast'
import Button from 'components/Button'
import Copyright from 'components/Copyright'
import { registerUserAction } from 'actions/auth'
import { validateFields } from 'helpers/registerValidations'
import styles from './styles'

function Register() {
  const initialState = {
    email: 'ornitorrincos@gmail.com',
    password: 'ABCdef123',
    passwordConfirmation: 'ABCdef123',
  }
  const [information, setInformation] = useState(initialState)
  const [fieldError, setFieldError] = useState([])
  const [completeFields, setCompleteFields] = useState(false)
  const [errorList, setErrorList] = useState([])
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState([])
  const [type, setType] = useState('')

  const classes = styles()

  function handleErrorMsg(key) {
    return fieldError.filter((arr) => arr.name === key)[0]?.msg
  }

  function hasError(key = '') {
    if (!key) return fieldError.length
    return !!fieldError.filter((arr) => arr.name === key)[0]
  }

  function setError(name, msg) {
    setFieldError((fieldError) => [...fieldError, { name, msg }])
  }

  function onChangeField(event) {
    event.preventDefault()
    const { name, value } = event.target
    if (
      information.email &&
      information.password &&
      information.passwordConfirmation
    )
      setCompleteFields(true)
    if (errorList.length) {
      setFieldError([])
    }
    setInformation({ ...information, [name]: value })

    return information
  }

  async function onSubmit() {
    const errorList = await validateFields(
      information.email,
      information.password,
      information.passwordConfirmation
    )

    if (errorList.length) {
      errorList.forEach((error) => {
        setError(error.field, error.message)
      })
      setErrorList(errorList)
      return setInformation({ email: information.email })
    }

    const { data, errors } = await registerUserAction(information)

    if (errors) {
      const msg = []
      errors.forEach((error) => {
        msg.push(error + '/ ')
      })
      setMessage(msg)
      setType('error')
      return setOpen(true)
    }

    setMessage(data.message)
    setType('success')
    return setOpen(true)
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

          <div className={classes.form}>
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
                  value={information.email}
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
                  value={information.password}
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
                  value={information.passwordConfirmation}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  label="Registrar"
                  onClick={onSubmit}
                  disabled={!completeFields}
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
      <Toast
        message={message}
        open={open}
        type={type}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default Register
