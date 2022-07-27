import styles from './Landing.module.css'
import { useState } from 'react'
import SetList from '../../components/SetList/SetList'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {props.user ? props.user.name : 'Developer,'}</h1>
      { !props.user ?
      <h1>Please Log In!</h1>
      :
      <SetList user={props.user} handleDeleteSet={props.handleDeleteSet} sets={props.sets} profile={props.user?.profile}/>
      }
    </main>
  )
}

export default Landing
