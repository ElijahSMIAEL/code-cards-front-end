import  './SetCard.css'
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
      <button 
            className="btn btn-danger"
            onClick={()=> props.handleDeleteSet(set._id)}
          >
            Delete
          </button>
    </div>
  )
}


export default Set