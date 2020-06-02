import axios from 'axios'

const isLocalhost = window.location.origin.includes('localhost')
const isStaging = window.location.origin.includes('staging-padma-yoga.netlify')
const isProduction = window.location.origin.includes('padmayoga.netlify')

function getUrl() {
  if (isLocalhost) return 'http://localhost:3001'
  if (isStaging) return 'https://staging-padma-yoga-api.herokuapp.com'
  if (isProduction) return 'https://padma-yoga-api.herokuapp.com/'
  return null
}

axios.defaults.baseURL = getUrl()

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
