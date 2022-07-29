import React from 'react';
import './App.css';
import Main from './Main'
import Navbar from './Navbar'
function App() {
  const[todo,setTodo]=React.useState([])
  function Addlist(input){
    input&&setTodo(todo=>[...todo],todo.push({input:input,id:todo.length,isdone:false}))
  }
  function remove(id){
    setTodo(todo=>todo.filter((todo)=>{
      return todo.id!==id && todo
    }))
  }
  function toggle(id){
    setTodo(todos=>todos.map((todo)=>{
      return todo.id===id ?{...todo,isDone:!todo.isDone}:todo
    }))
  }
  return (
    <div className="App">
      <Navbar/>
      <Main Addlist={Addlist} todo={todo} remove={remove} toggle={toggle} />
    </div>
  );
}

export default App;
