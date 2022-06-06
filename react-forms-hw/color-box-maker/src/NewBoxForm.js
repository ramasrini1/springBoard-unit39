import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    height: '',
    width: '',
    color: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ( {
      ...formData,
      [name]: value 
    } ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData, id:uuid() });
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input 
        id="height" 
        type="text" 
        name="height"
        placeholder="Box Height" 
        value={formData.height} 
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input 
        id="width" 
        type="text" 
        name="width"
        placeholder="Box Width"
        value={formData.width} 
        onChange={handleChange}
      />

      <label htmlFor="color">Background Color</label>
      <input 
        id="color" 
        type="text" 
        name="color"
        value={formData.color} 
        onChange={handleChange}
      />

      <button>Add Box!</button>
    </form>
  )
}

export default NewBoxForm;