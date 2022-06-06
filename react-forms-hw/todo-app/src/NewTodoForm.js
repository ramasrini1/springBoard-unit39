import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
 
  const [task, setTask] = useState("");
  
  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({task, id:uuid() });
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Task:</label>
      <input 
        id="todo" 
        type="text" 
        name="todo"
        placeholder="Todo" 
        value={task} 
        onChange={handleChange}
      />

      <button>Add Todo</button>
    </form>
  )
}

export default NewTodoForm;