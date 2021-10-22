import React from 'react'
import styles from './Login.module.css'

export const Login: React.FC = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputUsername = event.target.value
    setUsername(inputUsername)
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value
    setPassword(inputPassword)
  }

  const handleSubmit = (form: React.FormEvent) => {
    form.preventDefault()
    console.log('FORM LOGIN !!!', { username, password })
  }

  return (
    <div className={styles.loginForm}>
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
    </div>
  )
}
