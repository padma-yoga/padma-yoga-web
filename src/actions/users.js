/* eslint-disable import/prefer-default-export */
import { getAllUsers } from 'api/users'

export async function getUsersAction() {
  try {
    const response = await getAllUsers()
    return response
  } catch (error) {
    return error
  }
}
