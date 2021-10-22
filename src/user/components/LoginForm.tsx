import React from 'react'
import styles from './LoginForm.module.css'

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

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
    console.log('FORM LOGIN !!!', { username, password })
  }

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
          <button className="button">LOGIN!</button>
        </div>
      </form>
    </>
  )
}
