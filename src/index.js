import React, {useState} from "react";
import ReactDOM from "react-dom";



var TaskApp=()=>{
  var [task,setTasks]=useState([]);
  var [title, setTitle]= useState("");
  var [body, setBody]=useState("");

  return(
    <div>
      <h1>Tasks</h1>
      <p>Add Taks</p>
      <form>
        <input value={title} onChange={(evt)=> setTitle(evt.target.value)}></input>;
        <textarea value={body} onChange={(evt)=> setBody}
      </form>
    </div>
  )
}