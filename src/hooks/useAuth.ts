import { useHistory } from 'react-router-dom'

const AUTH_KEY = '_sc_auth'

function useAuth() {
  const history = useHistory()

  const setUser = (user: any) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  }

  const getUser = () => localStorage.getItem(AUTH_KEY) || ''

  const removeUser = () => {
    localStorage.removeItem(AUTH_KEY)
    history.push('/login')
  }

  return { getUser, setUser, removeUser }
}

export default useAuth
