import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './EditSet.module.css'
import AddCodeCard from "../../components/AddCodeCard/AddCodeCard";
import * as setService from '../../services/setService'


const EditSet = (props) => {
  const location = useLocation()
  const [setDetails, setSetDetails] = useState({})

  useEffect(() => {
    const fetchSetDetails = async () => {
      const setData = await setService.getSetDetails(location.state.set._id)
      setSetDetails(setData)
    }
    fetchSetDetails()
  }, [])

  return (
    <main>
      <h1>{setDetails.title}</h1>
      <AddCodeCard set={setDetails}/>
    </main>
  )
}

export default EditSet