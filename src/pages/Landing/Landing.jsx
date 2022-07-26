import styles from './Landing.module.css'
import { useState } from 'react'
import SetList from '../../components/SetList/SetList'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      <SetList sets={props.sets} profile={props.user?.profile}/>
    </main>
  )
}

export default Landing
