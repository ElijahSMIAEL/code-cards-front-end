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
import Set from './pages/SetShow/SetShow'
import SetShow from './pages/SetShow/SetShow'

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

  const handleDeleteSet = async id => {
    const deletedSet = await setService.deleteOne(id)
    setSets(sets.filter(set => set._id !== deletedSet._id))
    navigate('/')
  }


  return (
    <>
      <h1 className='app-title'>Code Cards</h1>
      <Routes>
        <Route 
          path='/profile-details/:id' 
          element={<ProfileDetails user={user} sets={sets} />} 
        />
        <Route 
          path="/" 
          element={<Landing handleDeleteSet={handleDeleteSet}  sets={sets} user={user} />} 
        />
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
          element={user ? <EditSet user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/sets/:id/"
          element={user ? <SetShow  sets={sets} /> : <Navigate to="/login" />}
        />
        <Route
          path="/AddSet"
          element={user ? <AddSet handleAddSet={handleAddSet} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles sets={sets} /> : <Navigate to="/login" />}
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
      <NavBar user={user} handleLogout={handleLogout} />
    </>
  )
}

export default App
