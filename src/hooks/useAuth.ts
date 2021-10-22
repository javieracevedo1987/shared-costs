import { useState } from 'react'

const AUTH_KEY = '_sc_auth'

function useAuth() {
  const [user, setUser] = useState(null)

  const saveUser = (user: any) => {
    setUser(user)
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  }

  const getUser = localStorage.getItem(AUTH_KEY) || ''

  return { getUser, saveUser }
}

export default useAuth
