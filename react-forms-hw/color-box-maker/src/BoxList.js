import React, { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';


function BoxList() {

  const [boxes, setBoxes] = useState([]);
  
  const addBox = (newBoxObj) => {
    setBoxes(boxes => [...boxes, { ...newBoxObj }])
  }
  
  const removeBox = (id) => {
    //Go through all the boxes and delete the box with the id passed
    //setBoxes(boxes => boxes.filter(box => box.id !== id));
    setBoxes(boxes.filter(box => box.id !== id));
  }
  return (
    <div className="BoxList">
      <h3>Box List</h3>
      <div>
          {boxes.map( ({id, height, width, color}) => 
          <Box 
            id={id} 
            height={height} 
            width={width} 
            color={color}
            handleRemove = {removeBox}
            key={id} /> )}
      </div>
      <NewBoxForm addBox={addBox} />
    </div>
   
  )
}

export default BoxList;
