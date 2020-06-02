function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validatePassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

// eslint-disable-next-line import/prefer-default-export
export function validateFields(email, password, passwordConfirmation) {
  const errors = []
  // if (!name) error('name', 'Campo obrigatório')
  // if (!surname) error('surname', 'Campo obrigatório')
  if (!email) errors.push({ field: 'email', message: 'Email obrigatório' })
  if (!isEmail(email))
    errors.push({ field: 'email', message: 'Email inválido' })

  if (!password)
    errors.push({ field: 'password', message: 'Senha é obrigatória' })
  if (!validatePassword(password))
    errors.push({
      field: 'password',
      message:
        'A senha deve conter 8 digitos, entre eles maiúsculas, minúsculas e números',
    })
  if (!passwordConfirmation)
    errors.push({
      field: 'passwordConfirmation',
      message: 'Confirmação de senha obrigatória',
    })
  if (password !== passwordConfirmation)
    errors.push({
      field: 'passwordConfirmation',
      message: 'Confirmação da senha não confere!',
    })

  return errors
}
