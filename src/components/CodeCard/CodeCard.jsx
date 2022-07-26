import styles from './CodeCard.module.css'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const CodeCard = (props) => {
  const card = props.card
  const codeBlock = card.code 
  return (
    <div>
      <h2>{card.prompt}</h2>
      <Editor
        value={codeBlock}
        highlight={codeBlock => highlight(codeBlock, languages.js)}
        style={{
          backgroundColor: "white"
        }}
      />
    </div>
  )
}


export default CodeCard