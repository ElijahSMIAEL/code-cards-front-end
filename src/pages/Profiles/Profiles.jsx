import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'



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
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles