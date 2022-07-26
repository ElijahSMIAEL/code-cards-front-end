import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/AddSet">Add Set</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li>
              <Link to="/login">
                <span class="material-symbols-outlined">login</span>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <span class="material-symbols-outlined">key</span>
              </Link>
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
