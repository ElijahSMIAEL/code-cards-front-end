import { useState, useEffect } from "react";
import * as setService from "../../services/setService";
import { useLocation } from 'react-router-dom';
import styles from "./SetShow.module.css";

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
    setShowMore(false)
  }
}

function handleBack() {
  if (index > 0){
    setIndex(index - 1)
    setShowMore(false)
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
        <h1 className={styles.cardPromptShow}>
          <i>{cards[index].prompt} </i> 
        </h1>
        <h3 className={styles.cardIdxShow}>  
          ({index + 1} of {cards.length})
        </h3>
        <div className={styles.btnCardCarousel}>
          <button className={styles.cardBtnShow} onClick={handleBack}>
            Back
          </button>
          <button className={styles.cardBtnShow} onClick={handleClick}>
            Next
          </button>
        </div>
        <button className={styles.cardBtnShow} onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show Answer'}
        </button>
        {
          showMore && 
          <p className={styles.cardAnswerShow}>
            {cards[index].answer}
          </p>
        }
      </div>
      }
    </main>
  );
}

export default SetShow;