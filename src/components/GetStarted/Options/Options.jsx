import React from 'react'
import style from "./Options.module.css"
import {GiChefToque} from 'react-icons/gi'
import {IoMdRestaurant} from 'react-icons/io'
export default function Options() {

   
  return (
    <div className={style.Options}>
        <div className={style.Option}>
          <GiChefToque />
         <p> Recipes</p>
        </div>
        <div className={style.Option}>
          <IoMdRestaurant />
          <p>Takeout</p>
        </div>
    </div>
  )
}
