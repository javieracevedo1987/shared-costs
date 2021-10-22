import React from 'react'
import { registerUser } from '../../services/users/userService'

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('')
  const [errorMsg, setErrorMsg] = React.useState<string>('')

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setUsername(value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPassword(value)
  }

  const handlePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setPasswordConfirm(value)
  }

  const handleSubmit = (form: React.FormEvent) => {
    if (!isValidForm()) return
    form.preventDefault()
    registerUser({ username, password, passwordConfirm })
      .then(() => console.log('USUARIO REGISTRADO'))
      .catch(() => setErrorMsg('Ese usuario ya existe!'))
  }

  const isValidForm = () => !!username && !!password && !!passwordConfirm

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="errorMsg">{errorMsg}</span>

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
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Password confirm"
            onChange={handlePasswordConfirm}
          />
        </div>

        <div className="form-group">
          <button disabled={!isValidForm()} className="button">
            REGISTER!
          </button>
        </div>
      </form>
    </>
  )
}
