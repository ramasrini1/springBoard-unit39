import React, {useState} from "react";
import './Todo.css';

const Todo = ({id=1, task="default todo", remove, update }) => {

  const [editTask, setTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleRemove = () => { remove(id) };

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   console.log("value is " + value);
  //   setEditTodo(editTodo => ( {
  //     ...editTodo,
  //     [name]: value 
  //   } ))
  // }

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
    //setIsEditing(!isEditing);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id is " + id);
    console.log("editTask is " + editTask);
    update(id, editTask);
    setIsEditing(false);
  }

  // default view
  let jsx = (
              <div align="center">
                <div className="Todo">
                  {task}
                  <button className="btn1"  onClick={handleRemove}>X</button>
                  <button className ="btn2" onClick={toggleEdit}>Edit</button>
                </div>   
                <hr className="divider"></hr>
              </div>
            );
 

  //todo view when editing
  if (isEditing) {
    jsx = (
      <div align="center">
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange}/>
          <button>Update!
          </button>
        </form>
      </div>
    )
  }
  return jsx;
}

export default Todo;