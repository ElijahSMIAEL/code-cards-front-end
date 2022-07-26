import styles from './SetList.module.css'
import SetCard from '../SetCard/SetCard'

const SetList = (props) => {
  const sets = props.sets
  const ownedSets = sets.filter(set => set.owner._id === props.profile)
  

  return (
    <div>
      {ownedSets.map(set => 
        <SetCard 
          key={set._id}
          user={props.user}
          set={set}
        />
      )}
    </div>
  )
}


export default SetList