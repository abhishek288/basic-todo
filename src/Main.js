import React from "react";
import Delete from "./images/x.svg";
import CheckFull from"./images/check-circle-fill.svg";
import Check from "./images/check-circle.svg";
import List from "./images/list-task.svg";
import Home from "./Home";
export default function Main({Addlist,todo,remove,toggle}){
    const[input,setInput]=React.useState("")
    const[task,setTask]=React.useState(false)
    function handleChange(e){
        setInput(e.target.value)
    }
    const element = todo.map((item)=>{
        return<span className="list-items" key={item.id} >
            <div className="item" onClick={()=>toggle(item.id)}>
             <img src={item.isDone?CheckFull:Check} />
             <h4 style={{textDecoration: item.isDone?"line-through": "none"}}>{item.input}</h4>
             </div>
             <img src={Delete}onClick={()=>remove(item.id)} /> </span>
    })
    let count=0;
  for(let i=0; i<todo.length; i++){
    let prev=count
    if(todo[i].isDone ){
     
      count++;
    }
    else{
      count=prev
    }
  }
  let left=todo.length-count;
  function handletask(){
    setTask(!task);
  }
    return(
        <div className="main-content">
          {!task&&todo.length===0&&<Home handletask={handletask}/>}
         {task&&<form onSubmit={(event)=>{
            event.preventDefault();
            Addlist(input)
            setInput(()=>"")
         }} className="input">
            <input type="text" placeholder="Enter the task" onChange={handleChange} value={input}/>
            {todo.length===0&&<img src={Delete} onClick={handletask}/>}
         </form>}
         {todo.length>0 &&  <span className="complete"><h3>Completed {count}</h3> <h3>{count?"Left":"Total"} {left}</h3></span>}
         {element}
         {/* {todo.length===0&&<button onClick={handletask} className="addbtn">{todo.length>0?"Add task":"Create new list"}</button>} */}
      
         </div>
    )
}