export const keys = {
  data: 'data',
  token: 'token',
}

export function saveItem(key, value) {
  return localStorage.setItem(key, value)
}

export function getItem(key) {
  return localStorage.getItem(key)
}

export function clearItem(key) {
  return localStorage.removeItem(key)
}
