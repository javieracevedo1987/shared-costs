import { Link } from 'react-router-dom'

export const Menu: React.FC = ({ children }) => (
  <>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
  </>
)
