import { useState, useEffect } from "react";
import * as setService from "../../services/setService";
import { useLocation } from 'react-router-dom';

const SetShow = (props) => {
  const location = useLocation()
  const [setDetails, setSetDetails] = useState({});
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const cards = setDetails.cards



  useEffect(() => {
    const fetchSetDetails = async () => {
      const setData = await setService.getSetDetails(location.state.set._id)
      setSetDetails(setData)
    }
    fetchSetDetails()
  }, [])

console.log("This is the set details", setDetails);

function handleClick() {
  if (index < cards.length - 1 ){
    setIndex(index + 1)
  }
}

function handleBack() {
  if (index > 0){
    setIndex(index - 1)
  }
}

function handleMoreClick() {
  setShowMore(!showMore)
}
console.log("This is the set details", setDetails);

  return ( 
    <main>
      {!setDetails.cards ? 
      <h2>Loading...</h2>
      :
      <div className="card">
        <button onClick={handleBack}>
          Back
        </button>
        <button onClick={handleClick}>
          Next
        </button>
        <h2>
          <i>{cards[index].prompt} </i> 
        </h2>
        <h3>  
          ({index + 1} of {cards.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show Answer'}
        </button>
        {
          showMore && 
          <p>
            {cards[index].answer}
          </p>
        }
      </div>
      }
    </main>
  );
}

export default SetShow;