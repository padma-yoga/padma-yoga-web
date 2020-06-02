import { register } from 'api/auth'

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

export async function loginUserAction() {
  // TODO
}
