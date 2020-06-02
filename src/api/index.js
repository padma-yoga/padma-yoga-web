import axios from 'axios'

const isLocalhost = window.location.origin.includes('localhost')

axios.defaults.baseURL = isLocalhost
  ? 'http://localhost:3001'
  : 'https://staging-padma-yoga-api.herokuapp.com'

// axios.defaults.baseURL = 'https://staging-padma-yoga-api.herokuapp.com'

axios.interceptors.request.use(
  (config) => {
    return { ...config, header: { 'Content-Type': 'application/json' } }
  },
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (config) => config,

  (error) => {
    if (error.response === undefined) {
      const networkError = JSON.parse(JSON.stringify(error))
      return Promise.reject(networkError.message)
    }

    const { status, data } = error.response
    if (status === 400) return Promise.reject(data)

    return Promise.reject(error)
  }
)

export default axios
