import { useState } from "react";


function State(){
    const [tasks, setTasks]=useState([
        {id:1234, name: "recornid reaact leacter", completed:true},
        {id:9567, name: "recornid reaact leacter", completed:true},
        {id:2356, name: "recornid reaact leacter", completed:true}
    ]);
    function handleDlete(id){
        console.log(id)
        // setTasks()
    }

   
    return(
        <>
        <div>
          <h2>task item</h2>
          {tasks.map((task ,index)=>(
            <li key={index}>{task.id}
             
            {task.name}{task.completed}----------------------
            <span><button onClick={()=>handleDlete(task.id)}>delete</button></span>
            </li>
           
    ))}

    
        </div>
        </>
    )
}
export default State;