import styles from './AddCodeCard.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as setService from '../../services/setService'
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const AddCodeCard = (props) => {
  const set = props.set
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    prompt: '',
    code: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = {
      prompt: formData.prompt,
      code : formData.code
    }
    try {
      props.handleAddCard(set._id, form)
    } catch (err) {
        console.log(err)
    }
  }


  const {prompt, code} = formData
  const isFormInvalid = () => {
    return !(prompt, code)
  }

  return (
    <main >
      <form
        className={styles.AddCardForm} 
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label htmlFor="prompt-input">Enter Prompt:</label>
        <textarea
          onChange={handleChange}
          type="text" 
          name="prompt" 
          id="prompt-input"
          placeholder='Prompt...'
          value={formData.prompt}
        />
        <label htmlFor="answer-input">Enter Answer:</label>
        <Editor 
          placeholder='Add Answer Code Here...'
          value={formData.code}
          name="code"
          code={code}
          onChange={handleChange}
          highlight={code => highlight(code, languages.js)}
          textareaClassName="code-editor"
          style={{
            backgroundColor: "white",
          }}
        />
        <button disabled={isFormInvalid()} className="btn btn-secondary">Add Code Card
        </button>
      </form>
    </main>
  )
}


export default AddCodeCard