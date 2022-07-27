import React from 'react';
import './App.css';
import Main from './Main'
import Navbar from './Navbar'
function App() {
  const[todo,setTodo]=React.useState([])
  function Addlist(input){
    input&&setTodo(todo=>[...todo],todo.push({input:input,id:todo.length}))
    console.log(todo)
    console.log(todo.length)
  }
  function remove(id){
    setTodo(todo=>todo.filter((todo)=>{
      return todo.id!==id && todo
    }))
  }
  return (
    <div className="App">
      <Navbar/>
      <Main Addlist={Addlist} todo={todo} remove={remove} />
    </div>
  );
}

export default App;
