import React from "react";
import './Box.css';

const Box = ({id, height, width, color, handleRemove}) => {

  const remove = () => { handleRemove(id) };
 
  return (
   <div align="center">
    <div
      style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor: color
      }} >
    </div>
    
     <div className='removeBtn'><button onClick={remove}>Remove The Box!</button></div>
  </div>
  )
}

export default Box;