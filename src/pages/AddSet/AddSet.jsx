import styles from './AddSet.module.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const AddSet = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: 'JS'
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
      props.handleAddSet(formData)
      navigate('/')
    } catch (err) {
        console.log(err)
    }
  }

  const {title} = formData
  const isFormInvalid = () => {
    return !(title)
  }

  return (
    <main>
      <h1 className={styles.AddSetHeader}>Create a Set!</h1>
      <form 
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.AddSetForm}
      >
        <input 
          className={styles.titleInput} 
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange} 
        />
        <select
          className={styles.categorySelect} 
          name="category" 
          value={formData.category}
          onChange={handleChange}
        >
          <option value="JS">JS</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Python">Python</option>
        </select>
        <button disabled={isFormInvalid()} className="btn btn-secondary">
          Create New Set
        </button>
      </form>
    </main>
  )
}


export default AddSet