import React, { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
import styles from './Login.module.css'

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const handleToggleForm = (event: React.MouseEventHandler<HTMLDivElement>) => {
    setIsLogin(!isLogin)
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className={styles.footer} onClick={handleToggleForm}>
          {isLogin ? 'Register' : 'Login'}
        </div>
      </div>
    </div>
  )
}
