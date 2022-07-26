import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddSet from './pages/AddSet/AddSet'
import * as setService from './services/setService'
import EditSet from './pages/EditSet/EditSet'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [sets, setSets ] = useState([])
  const navigate = useNavigate()

  useEffect (() => {
    const fetchAllSets = async () => {
      const setData = await setService.getAll()
      setSets(setData)
    }
    fetchAllSets()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddSet = async (setData) => {
    const newSet = await setService.create(setData)
    setSets([...sets, newSet])
    navigate('/')
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path='/profile-details' element={<ProfileDetails user={user} sets={sets} />} />
        <Route path="/" element={<Landing sets={sets} user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/sets/:id/edit"
          element={user ? <EditSet /> : <Navigate to="/login" />}
        />
        <Route
          path="/AddSet"
          element={user ? <AddSet handleAddSet={handleAddSet} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
