
import React from 'react';
import List from "./images/list-task.svg";
import List1 from "./images/list3.jpg"
export default function Home({handletask}) {
  return (
    <div className="home">
         <img src={List1}/>
        <button  onClick={handletask}>Create new list</button>
        <p>Create a new todo list to make your day productive ☑</p>
    </div>
  )
}

