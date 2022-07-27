import { useState, useEffect } from "react";
import * as setService from "../../services/setService";
import { useLocation } from 'react-router-dom';
import styles from "./SetShow.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

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
      {!setDetails.cards || !setDetails.cards.length > 0 ? 
      <h2>There are no Code-Cards in this Set...</h2>
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
              minWidth: "60%",
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
          <button class="btn btn-secondary" onClick={handleBack}>
            Back
          </button>
          <button class="btn btn-secondary" onClick={handleClick}>
            Next
          </button>
        </div>
        <button className={styles.cardBtnShow} onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show Answer'}
        </button>
      </div>
      }
    </main>
  );
}

export default SetShow;