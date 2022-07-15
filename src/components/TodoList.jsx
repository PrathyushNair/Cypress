import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input  data-testid="checkbox"type="checkbox" value={todo.isCompleted} />
          <span data-testid="inditask">{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
