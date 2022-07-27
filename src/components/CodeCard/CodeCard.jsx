import styles from './CodeCard.module.css'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const CodeCard = (props) => {
  const card = props.card
  const codeBlock = card.code 
  const cardId = card._id
  const setId = props.setDetails._id
  return (
    <div class={styles.codeCard}>
      <h3>{card.prompt}</h3>
      <Editor
        value={codeBlock}
        highlight={codeBlock => highlight(codeBlock, languages.js)}
        style={{
          backgroundColor: "white",
          width: "50vw",
          padding: "0.5vh",
        }}
        />
        {props.isOwner &&
        <button className="btn btn-danger"onClick={()=> props.handleDeleteCard(setId, cardId)}>Delete</button>
        }
    </div>
  )
}


export default CodeCard