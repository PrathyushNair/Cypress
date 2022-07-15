import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  console.log("value in input",value)
  return (
    <form onSubmit={submit}>
      <input class="iptag"data-testid="inputtag"autoFocus type="text" value={value} onChange={handleChange} />
      <button data-testid="addbtn" type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
