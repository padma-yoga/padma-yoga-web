import { register, login } from 'api/auth'

export async function registerUserAction(data) {
  try {
    const { email, password } = data
    const newData = { email, password, roles: 'user' }

    const response = await register(newData)
    return response
  } catch (error) {
    return error.errors ? error : { errors: [error.response.data.message] }
  }
}

export async function loginUserAction(data) {
  try {
    const response = await login(data)

    return response
  } catch (error) {
    if (error === 'Network Error') {
      return { errors: ['Problemas na rede. Tente mais tarde!'] }
    }

    if (error.response) return { errors: error.response.data.message }

    return { errors: [error.message] }
  }
}
