import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeUser } from '../modules/user/store/actions'

const AUTH_KEY = '_sc_auth'

function useAuth() {
  const history = useHistory()
  const dispatch = useDispatch()

  const setUser = (user: any) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  }

  const getUser = () => localStorage.getItem(AUTH_KEY) || ''

  const clearUser = () => {
    localStorage.removeItem(AUTH_KEY)
    dispatch(removeUser())
    history.push('/login')
  }

  return { getUser, setUser, clearUser }
}

export default useAuth
