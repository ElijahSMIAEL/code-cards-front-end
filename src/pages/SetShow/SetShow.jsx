import { useState, useEffect } from "react";
import * as setService from "../../services/setService";
import * as authService from "../../services/authService";
import { useLocation, Link } from 'react-router-dom';
import styles from "./SetShow.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const SetShow = (props) => {
  const [user, setUser] = useState(authService.getUser())
  const location = useLocation()
  const [setDetails, setSetDetails] = useState({});
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const cards = setDetails.cards
  const set = setDetails
  



  useEffect(() => {
    const fetchSetDetails = async () => {
      const setData = await setService.getSetDetails(location.state.set._id)
      setSetDetails(setData)
    }
    fetchSetDetails()
  }, [])

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


  return ( 
    <main>
      { setDetails.owner ? 
      <div className={styles.setShowContainer}>
      {!setDetails.cards || !setDetails.cards.length > 0 ?
      <div className={styles.setNoShow}>
        <h2>There are no Code-Cards in this Set...</h2>
        { setDetails.owner._id === user.profile ?
          <Link  state={{set}} to={`/sets/${set._id}/edit`}>
          <button className="btn btn-secondary">Add Code-Cards</  button>
          </Link>
          :
          <h2>Bummer...</h2>
        }
      </div>
      :
      <div className="card">
        <h3 className={styles.cardPromptShow}>
          <i>{cards[index].prompt} </i> 
        </h3>
        {
          showMore && 
          <Editor 
            value={cards[index].code}
            codeBlock = {cards[index].code}
            highlight={codeBlock => highlight(codeBlock, languages.js)}
            style ={{
              backgroundColor: "white",
              minWidth: "280px",
              width: "fit-content",
              margin: "3vw",
              padding: "0.5vh",
            }}
          />
        }
        <h3 className={styles.cardIdxShow}>  
          ({index + 1} of {cards.length})
        </h3>
        <div className={styles.btnCardCarousel}>
          <button className="btn btn-secondary" onClick={handleBack}>
            Back
          </button>
          <button className="btn btn-secondary" onClick={handleClick}>
            Next
          </button>
        </div>
        <button className={styles.cardBtnShow} onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show Answer'}
        </button>
      </div>
      }
      </div>
      :
      <h1>Loading...</h1>
      }
    </main>
  );
}

export default SetShow;