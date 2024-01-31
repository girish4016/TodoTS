import React, { useState } from 'react';
import './App.css';
import {AddTodo} from "./components/AddTodo";
import {DisplayTodos} from "./components/DisplayTodos";


type Todo = {
  id: string;
  todo: string;
}

function App() {
  const [data,setData] =  useState<Todo[]>([]);
  
  return (
    <div className="App">
      <h1 className='Header' >Todo-App </h1>
      <AddTodo setData={setData} ></AddTodo>
      <DisplayTodos data = {data} setData = {setData} ></DisplayTodos>
    </div>    
  );
}

export default App;
