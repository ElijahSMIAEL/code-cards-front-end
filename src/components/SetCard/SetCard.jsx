import styles from './SetCard.module.css'
import { Link } from 'react-router-dom'

const Set = (props) => {
  const set = props.set
  return (
    <div className="card">
      <Link state={{set}} to={`/sets/${set._id}`}>
        <div className="card-body">
            <h1>{set.title}</h1>
        </div>
      </Link>
      <button><Link state={{set}} to={`/sets/${set._id}/edit`}/></button>
    </div>
  )
}


export default Set