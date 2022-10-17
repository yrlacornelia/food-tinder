import React from 'react'
import style from "./Button.module.css"
export default function Button() {
  return (
    <div className={style.buttonContainer}>
    <button className={style.button}>Continue</button>
  </div>)
}
