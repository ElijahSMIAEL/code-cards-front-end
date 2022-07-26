import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
  const profile = props.profile
  return (
    <div>
      <Link 
        to={`/profile-details/${profile._id}`}  
        state={{ profile }}
      >
      <div>
        <h1>{profile.name}</h1>
      </div>
      </Link>
    </div>
  )
}


export default ProfileCard