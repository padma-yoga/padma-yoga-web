import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const getCurrentUser = () => {
  const currentUser = localStorage.getItem('currentUser')
  if (currentUser) return JSON.parse(currentUser)
  return undefined
}

const initialState = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('isAuthenticated'),
  currentUser: getCurrentUser(),
  isSubmitting: false,
}

export const Context = createContext({})

const Provider = ({ children }) => {
  const [store, updateStore] = useState(initialState)
  const setStore = (props) => updateStore({ ...store, ...props })
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
}

export const useStore = () => useContext(Context)

export default Provider
