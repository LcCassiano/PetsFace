import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name}) => {
  return (
    <div className={styles.wrap}>
    <label className={styles.label} htmlFor={name}>{label}</label>
    <input className={styles.input} type={type}/>
    <p className={styles.error}>Errorr</p>
    </div>
   
  )
}

export default Input