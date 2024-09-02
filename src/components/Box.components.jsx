import React from 'react'
import Button from './Button.Components';
import '../style/box_style.css'
const Box=(props)=>{
  return (
    <div className='box'>
        <div className='image_style'>
        <img src={props.img} alt="LapRead" className='LapRead'/>
        </div>
        <div>
            <Button text={props.text}/>
        </div>
        <div>
            <p>{props.para}</p>
        </div>
    </div>
  )
}
export default Box;
