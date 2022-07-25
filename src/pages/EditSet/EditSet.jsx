import { useState } from "react";
import styles from './EditSet.module.css'
import AddCodeCard from "../../components/AddCodeCard/AddCodeCard";


const EditSet = (props) => {
  console.log(props.sets)
  return (
    <main>
      <AddCodeCard />
    </main>
  )
}

export default EditSet