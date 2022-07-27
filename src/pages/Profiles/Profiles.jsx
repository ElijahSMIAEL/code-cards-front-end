import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'



const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const otherProfiles = profiles.filter(profile => profile._id !== props.profileId)
  

  return (
    <main>
      <div className={styles.profilesContainer}>
      {profiles.length ? 
        <>
          {otherProfiles.map(profile =>
            <ProfileCard
              sets={props.sets}
              profile={profile}
              key={profile._id}
            />
          )}
          <div className={styles.divSpacer}></div>
        </>
      :
        <p>No profiles yet</p>
      }
      </div>
    </main>
  )
}

export default Profiles