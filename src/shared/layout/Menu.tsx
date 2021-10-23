import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import styles from './Menu.module.css'

export const Menu: React.FC = ({ children }) => {
  const { removeUser } = useAuth()

  const handleLogout = () => {
    removeUser()
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
