import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './EditSet.module.css'
import AddCodeCard from "../../components/AddCodeCard/AddCodeCard";
import * as setService from '../../services/setService'
import CodeCard from "../../components/CodeCard/CodeCard";


const EditSet = (props) => {
  const location = useLocation()
  const [setDetails, setSetDetails] = useState({})
  const setId = setDetails._id
  console.log("setDetails", setDetails)

  useEffect(() => {
    const fetchSetDetails = async () => {
      const setData = await setService.getSetDetails(location.state.set._id)
      setSetDetails(setData)
    }
    fetchSetDetails()
  }, [])

  const handleAddCard = async (setId, cardData) => {
    const updatedSet = await setService.createCard(setId, cardData)
    setSetDetails(updatedSet)
  }

  return (
    <main>
      <h1>{setDetails.title}</h1>
      {!setDetails.cards ? 
      <h2>Loading...</h2>
      :
      <div>
      { setDetails.cards.map(card => 
        <CodeCard 
          card={card}
          key={card}
        />
      )}
      <AddCodeCard 
        set={setDetails} 
        handleAddCard={handleAddCard} 
        cards={setDetails.cards} 
      />
      </div>
      } 
    </main>
  )
}

export default EditSet