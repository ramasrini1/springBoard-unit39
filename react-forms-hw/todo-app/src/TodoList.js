import React, { useState } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
//import './BoxList.css';
//import { v4 as uuid } from 'uuid';

function TodoList() {

  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodoObj) => {
    setTodos(todos => [...todos, { ...newTodoObj }])
  }

   // update a todo with updatedTask
   const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };
  
  
  const remove = (id) => {
    //Go through all the todos and delete the todo with the id passed
    //setBoxes(boxes => boxes.filter(box => box.id !== id));
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div>
      <h3>ToDo List</h3>
      <div>
          {todos.map( ({id, task}) => 
          <Todo
            id={id} 
            task={task} 
            remove = {remove}
            update={update}
            key={id} /> )}
      </div>
      <NewTodoForm addTodo={addTodo} />
    </div>
   
  )
}

export default TodoList;
