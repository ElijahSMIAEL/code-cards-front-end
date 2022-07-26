import styles from './SetList.module.css'
import SetCard from '../SetCard/SetCard'
import { useState } from 'react'

const SetList = (props) => {
  const sets = props.sets
  const ownedSets = sets.filter(set => set.owner._id === props.profile)
  
  const [categoryData, setCategoryData] = useState({
    category: ''
  })
  
  const category = categoryData.category
  console.log(category)
  
  const filteredSets = ownedSets.filter(set => set.category === category)

  const handleChange = e => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <select onChange={handleChange} name="category" id="category-select">
        <option value="">Select a category</option>
        <option value="JS">JS</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
      </select>
      { category ? 
        filteredSets.map(set => 
          <SetCard 
          key={set._id}
          user={props.user}
          set={set}
          />
        )
        :
          ownedSets.map(set => 
          <SetCard 
          key={set._id}
          user={props.user}
          set={set}
          />
        )
      }
    </div>
  )
}


export default SetList