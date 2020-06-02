import axios from './index'

const base = '/users'
// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => axios.get(base)
