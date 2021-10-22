import React from 'react'

export const RegisterForm: React.FC = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('')

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
    form.preventDefault()
    console.log('FORM REGISTER !!!', { username, password, passwordConfirm })
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
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Password confirm"
            onChange={handlePasswordConfirm}
          />
        </div>

        <div className="form-group">
          <button className="button">REGISTER!</button>
        </div>
      </form>
    </>
  )
}
