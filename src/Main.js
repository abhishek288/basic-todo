import React from "react";
import Delete from "./images/x.svg";
export default function Main({Addlist,todo,remove}){
    const[input,setInput]=React.useState("")
    function handleChange(e){
        setInput(e.target.value)
    }
    const element = todo.map((item)=>{
        return<span className="list-items" key={item.id}><h4>{item.input}</h4><img src={Delete}
        onClick={()=>remove(item.id)} /> </span>
    })
    return(
        <div className="Main">
         <form onSubmit={(event)=>{
            event.preventDefault();
            Addlist(input)
            setInput(()=>"")
         }} className="input">
            <input type="text" placeholder="Enter the task" onChange={handleChange} value={input}/>
         </form>
         {element}
        </div>
    )
}