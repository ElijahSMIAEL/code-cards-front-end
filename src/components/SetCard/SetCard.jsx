import styles from './SetCard.module.css'
import { Link } from 'react-router-dom'

const Set = (props) => {
  const set = props.set
  return (
    <Link state={{set}} to={`/sets/${set._id}`}>
    <div className={styles.card}>
        <div className="card-body">
            <h2 className={styles.setHeader}>{set.title}</h2>
        </div>
      <Link state={{set}} to={`/sets/${set._id}/edit`}>
      <button className="btn btn-secondary">Edit</button></Link>
      {props.user?.profile === set.owner?._id &&
          <button 
          className="btn btn-danger"
            onClick={()=> props.handleDeleteSet(set._id)}
            >
            Delete
          </button>
      
    }
    </div>
    </Link>
  )
}


export default Set