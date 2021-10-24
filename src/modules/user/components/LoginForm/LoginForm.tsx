import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAsync } from '../../store/actions'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../../../app/store'
import useAuth from '../../../../hooks/useAuth'
import styles from './LoginForm.module.css'

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const dispatch = useDispatch()
  const selectorUser = useSelector((state: RootState) => state.user.user)
  const history = useHistory()
  const { setUser } = useAuth()

  useEffect(() => {
    if (selectorUser) {
      setUser(selectorUser)
      history.push('/groups')
    }
  }, [setUser, history, selectorUser])

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setUsername(value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPassword(value)
  }

  const handleSubmit = (form: React.FormEvent) => {
    form.preventDefault()
    const user = { username, password }
    dispatch(loginUserAsync(user))
  }

  const isValidForm = () => !!username && !!password

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="user"
            value={username}
            placeholder="Username"
            onChange={handleUsername}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>

        <div className="form-group">
          <button
            disabled={!isValidForm()}
            className={`button ${styles.buttonLogin}`}
          >
            LOGIN!
          </button>
        </div>
      </form>
    </>
  )
}
