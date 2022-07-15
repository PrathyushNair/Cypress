import React, { useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useEffect } from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const[error,setError]=React.useState(false)
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value)
  };
 
  const handledelete=async(id)=>{
    let resp = await axios.delete(`http://localhost:4004/todos/${id}`)
    axios.get("http://localhost:4004/todos").then((r) => {
      setTodos(r.data);
      console.log("data",r.data)
    })
  }
 const handletoggle=async(id,completed)=>{
  console.log("in toggle")
  if(completed)
  {
    let resp=await axios.patch(`http://localhost:4004/todos/${id}`,{isCompleted:false})
  }
  else{
    let resp=await axios.patch(`http://localhost:4004/todos/${id}`,{isCompleted:true})
  }
  
  axios.get("http://localhost:4004/todos").then((r) => {
    setTodos(r.data);
  
  });
 }
  const handleSubmit = async () => {
    let resp = await axios.post("http://localhost:4004/todos", {
      value: value,
      isCompleted: false,
    }).then((resp)=>{
      setTodos([...todos, resp.data]);
      setValue("");
    })
    .catch((e)=>{
      setError(true)
    })
  
  };

  useEffect(() => {
    axios.get("http://localhost:4004/todos").then((r) => {
      setTodos(r.data);
      console.log("data",r.data)
    });
  }, []);
  return (
    <div>
      <h3>TodoApp</h3>
      <TodoInput
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList handletoggle={handletoggle}handledelete={handledelete}error ={error}todos={todos} />
    </div>
  );
};

export default TodoApp;
