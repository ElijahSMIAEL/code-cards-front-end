import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div>
            <h1>Welcome, {user.name}</h1>
            <Link to="/profiles">
              <span class="material-symbols-outlined">group</span>
            </Link>
            <Link to="" onClick={handleLogout}>
              <span class="material-symbols-outlined">logout</span>
            </Link>
            <Link to="/changePassword">
              <span class="material-symbols-outlined">key</span>
            </Link>
            <Link to="/AddSet">
              <span class="material-symbols-outlined">add</span>
            </Link>
          </div>
        </nav>
      :
        <nav>
          <div>
            <Link to="/login">
              <span class="material-symbols-outlined">login</span>
            </Link>
            <Link to="/signup">
              <span class="material-symbols-outlined">key</span>
            </Link>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
