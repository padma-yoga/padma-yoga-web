/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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

export default function Login() {
  const initialState = {
    email: '',
    password: '',
  }
  const history = useHistory()

  const [information, setInformation] = useState(initialState)
  const [fieldError, setFieldError] = useState([])
  const [completeFields, setCompleteFields] = useState(false)
  const [errorList, setErrorList] = useState([])
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState([])
  const [type, setType] = useState('')

  function onChangeField(event) {
    event.preventDefault()
    const { name, value } = event.target
    if (information.email && information.password) setCompleteFields(true)
    if (errorList.length) {
      setFieldError([])
    }
    setInformation({ ...information, [name]: value })

    return information
  }

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

  const classes = styles()

  async function onSubmit() {
    const errorList = await validateFields(
      information.email,
      information.password
    )
    console.log('Info: ' + information.password)

    if (errorList.length) {
      errorList.forEach((error) => {
        setError(error.field, error.message)
      })
      setErrorList(errorList)
      return setInformation({ email: information.email })
    }

    async function postLogin(information) {
      // Passando o Id como parâmentro OK!

      const data = await axios.post('/login', information.email)

      return data
    }
    const dados = postLogin(information)
    console.log('Data:' + dados)

    const { data, errors } = await registerUserAction(information)

    let messagem = 'Erro'

    if (errors) {
      const msg = []
      errors.forEach((error) => {
        msg.push(error + '/ ')
      })

      setMessage(messagem)
      setType('error')
      return setOpen(true)
    }
    messagem = 'Sucesso'

    setMessage(messagem)
    setType('success')
    return setOpen(true)
  }
  return (
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
                  onChange={onChangeField}
                  value={information.password}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  label="Entrar"
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
