import React from 'react'
import '../style/button_style.css'
const Button=(props)=>{
  return (
    <input type='button' value={props.text} className='button'/>
  )
}

export default Button;