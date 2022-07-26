import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as setService from '../../services/setService'
import { getProfileDetails } from '../../services/profileService'
import SetList from '../../components/SetList/SetList'


const ProfileDetails = (props) => {
  const location = useLocation()
  const [profileDetails, setProfileDetails] = useState({})
  const [sets, setSets] = useState([])

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(location.state.profile._id)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [])
  
  useEffect (() => {
    const fetchAllSets = async () => {
      const setData = await setService.getAll()
      setSets(setData)
    }
    fetchAllSets()
  }, [])

  return (
    <main>
      <h1>{profileDetails.name}</h1>
      <SetList sets={sets} profile={profileDetails._id}/>
    </main>
  )
}


export default ProfileDetails