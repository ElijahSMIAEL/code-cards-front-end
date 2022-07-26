import styles from './CodeCard.module.css'

const CodeCard = (props) => {
  const card = props.card
  return (
    <div>
      <h2>{card.prompt}</h2>
      <h3>{card.answer}</h3>
    </div>
  )
}


export default CodeCard