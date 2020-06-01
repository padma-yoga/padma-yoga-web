import axios from './index'

const base = '/auth'
// eslint-disable-next-line import/prefer-default-export
export const register = (data) => axios.post(base, data)
