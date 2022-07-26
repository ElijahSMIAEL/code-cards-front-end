import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './EditSet.module.css'
import AddCodeCard from "../../components/AddCodeCard/AddCodeCard";
import * as setService from '../../services/setService'
import CodeCard from "../../components/CodeCard/CodeCard";
import * as authService from '../../services/authService'


const EditSet = (props) => {
  const [user, setUser] = useState(authService.getUser())
  const location = useLocation()
  const [setDetails, setSetDetails] = useState({})
  const setId = setDetails._id
  const isOwner = setDetails.owner?._id === user.profile

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

  const handleDeleteCard = async (setId, cardId) => {
    const updatedCards = await setService.deleteCard(setId, cardId)
    setSetDetails(updatedCards)
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
          setDetails={setDetails}
          handleDeleteCard={handleDeleteCard}
          card={card}
          key={card._id}
          user={props.user}
        />
      )}
      { isOwner ?
      <AddCodeCard 
        set={setDetails} 
        handleAddCard={handleAddCard} 
        cards={setDetails.cards} 
      />
      :
      <h1>{setDetails.owner?.name}'s Work</h1>
      }
      </div>
      } 
    </main>
  )
}

export default EditSet