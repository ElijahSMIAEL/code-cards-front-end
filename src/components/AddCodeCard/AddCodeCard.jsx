import styles from './AddCodeCard.modules.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as setService from '../../services/setService'

const AddCodeCard = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState([])
  const [formData, setFormData] = useState({
    prompt: '',
    answer: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const newCard = await setService.createCard(  formData)
        setCards([...cards, newCard])
    } catch (err) {
        console.log(err)
    }
  }


  const {prompt, answer} = formData
  const isFormInvalid = () => {
    return !(prompt, answer)
  }

  return (
    <main>
      <form 
        className={styles.AddCodeCardForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label htmlFor="prompt-input">Enter Prompt:</label>
        <textarea
          onChange={handleChange}
          type="text" 
          name="prompt" 
          id="prompt-input"
          placeholder='Prompt...'
          value={formData.prompt}
        />
        <label htmlFor="answer-input">Enter Answer:</label>
        <textarea 
          onChange={handleChange}
          type="text" 
          name="answer" 
          id="answer-input"
          placeholder='Answer...'
          value={formData.answer}
        />
        <button disabled={isFormInvalid()} className={styles.AddCardButton}>
        </button>
      </form>
    </main>
  )
}


export default AddCodeCard