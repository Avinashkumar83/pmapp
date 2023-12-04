import { useState } from "react";


function NewTasks({onAdd}){
    const [entersTasks, setEntersTasks] =useState('');

    function handalChange(event){
        setEntersTasks(event.target.value)
    }

    function handalClick(){
        if(entersTasks.trim() ===''){
            return;
        }
        onAdd(entersTasks)
         setEntersTasks('');
    }
    return(
        <div className="flex items-center gap-4">
           <input type="text" className="w-64 px-1 py-2 rounded-sm bg-stone-200" 
           onChange={handalChange}
           value={entersTasks}
           />
           <button className="text-stone-700 hover:text-stone-950" onClick={handalClick}>Add tasks</button>
        </div>
    )
}
export default NewTasks;