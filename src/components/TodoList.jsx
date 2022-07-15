import React from "react";

const TodoList = ({ todos = [] ,error,handledelete,handletoggle}) => {
  
  return (
    <div>
      {error && <h4 data-testid="error">Error has occured</h4>}
      {todos.map((todo) => (
        <li data-testid="list" key={todo.id}>
          <input  data-testid="checkbox"type="checkbox" onChange={()=>handletoggle(todo.id,todo.isCompleted)} checked={todo.isCompleted} />
          <span style={{color:todo.isCompleted ?"green":"black"}} data-testid="inditask">{todo.value}</span>
          <button data-testid="deletebtn" onClick={()=>handledelete(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
