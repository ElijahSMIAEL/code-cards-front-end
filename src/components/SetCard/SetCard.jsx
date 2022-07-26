import styles from './SetCard.module.css'
import { Link } from 'react-router-dom'

const Set = (props) => {
  const set = props.set
  return (
    <div>
      <Link state={{set}} to={`/sets/${set._id}/edit`}>
      <h1>{set.title}</h1>
      </Link>
    </div>
  )
}


export default Set