import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'



const Profiles = () => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])
  

  return (
    <>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <ProfileCard 
              profile={profile}
              key={profile._id}
            />
          )}
          <div className={styles.divSpacer}></div>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles