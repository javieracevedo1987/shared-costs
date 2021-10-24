import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeUser } from '../modules/user/store/actions'

const AUTH_KEY = '_sc_auth'

function useAuth() {
  const history = useHistory()
  const dispatch = useDispatch()

  const setUser = (user: any) => {
    const { password, ...restUser } = user // Remove password
    localStorage.setItem(AUTH_KEY, JSON.stringify(restUser))
  }

  const getUser = () => {
    const user = localStorage.getItem(AUTH_KEY)

    if (user) {
      return JSON.parse(user)
    }

    return null
  }

  const clearUser = () => {
    localStorage.removeItem(AUTH_KEY)
    dispatch(removeUser())
    history.push('/login')
  }

  return { getUser, setUser, clearUser }
}

export default useAuth
