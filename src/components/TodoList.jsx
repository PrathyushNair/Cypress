import React from "react";

const TodoList = ({ todos = [] ,error}) => {
  return (
    <div>
      {error && <h4 data-testid="error">Error has occured</h4>}
      {todos.map((todo) => (
        <li data-testid="list" key={todo.id}>
          <input  data-testid="checkbox"type="checkbox" value={todo.isCompleted} />
          <span data-testid="inditask">{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
