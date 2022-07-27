import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
  const profile = props.profile
  const sets = props.sets
  const ownedSets = sets.filter(set => set?.owner._id === profile?._id)
  return (
    <div className={styles.container}>
      <Link 
        to={`/profile-details/${profile._id}`}  
        state={{ profile }}
      >
        <div class="card">
          <div class="card-body">
            <h1>{profile.name}</h1>
            { ownedSets.length === 1 ?
              <h2>has {ownedSets.length} Card Set</h2>
              :
              <h2>has {ownedSets.length} Card Sets</h2>
            }
          </div>
        </div>
      </Link>
    </div>
  )
}


export default ProfileCard