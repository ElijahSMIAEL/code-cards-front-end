import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'



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
          <Link 
          to='/profile-details' 
          key={profile._id} 
          state={{ profile }}
          >
            <div>
            <h2>{profile.name}</h2>
            </div>
          </Link>
            )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles