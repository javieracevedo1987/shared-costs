const AUTH_KEY = '_sc_auth'

function useAuth() {
  const setUser = (user: any) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  }

  const getUser = localStorage.getItem(AUTH_KEY) || ''

  return { getUser, setUser }
}

export default useAuth
