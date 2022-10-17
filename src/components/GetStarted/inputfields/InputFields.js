import React from 'react'
import style from "./InputFields.module.css"
export default function InputFields() {
  return (
    <div className={style.InputsContainer}>
 <form className={style.inputGroup}>

    <input  placeholder="Participants" type="number" name="name" />

</form>
<form className={style.inputGroup}>
    <input placeholder="Options" type="number" name="name" />

</form>
  </div>
  )
}
