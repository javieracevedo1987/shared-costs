import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import styles from './Menu.module.css'

export const Menu: React.FC = ({ children }) => {
  const { clearUser } = useAuth()

  const handleLogout = () => {
    clearUser()
  }

  return (
    <>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
        </ul>
        <ul>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}
