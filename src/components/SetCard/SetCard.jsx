import styles from './SetCard.module.css'
import { Link } from 'react-router-dom'

const Set = (props) => {
  const set = props.set
  const isOwner = props.user?.profile === set.owner?._id
  return (
    <Link state={{set}} to={`/sets/${set._id}`}>
    <div className={styles.setCard}>
        <div className="card-body">
            <h1 className={styles.setHeader}>{set.title}</h1>
        </div>
      { isOwner ?
      <div className="card-body">
      <Link state={{set}} to={`/sets/${set._id}/edit`}>
      <button className="btn btn-secondary">Edit</button></Link>
          <button 
          className="btn btn-danger"
            onClick={()=> props.handleDeleteSet(set._id)}
            >
            Delete
          </button>
        </div>
        :
        <h2>{set.category}</h2>
      }
    </div>
    </Link>
  )
}


export default Set