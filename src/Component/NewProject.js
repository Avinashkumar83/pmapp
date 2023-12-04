import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({onAdd,onCancel}){
   const modal = useRef()

   const title = useRef();
   const description = useRef();
   const duedate = useRef();

   function handalSave(){ // managig all these project project[this]
      const enterdTitle = title.current.value
      const enterdDescription = description.current.value

      // console.log(duedate.current.value);
      const enterdDuedate = duedate.current.value

      if(enterdTitle.trim()===''||enterdDescription.trim()===''||enterdDuedate.trim()===''){
         modal.current.open();
         return;
      }

      //validation

      onAdd({   //passing object
         title:enterdTitle,
         description:enterdDescription,
         duedate:enterdDuedate,

      })

   }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
           <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
           <p className="text-stone-400 mb-4">Oops ... look like you forgat to a enter value.</p>
           <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input</p>
        </Modal>
        <div className="w-[35rem] mt-16 ">
          <menu className="flex items-center justify-end gap-4 my-4">
              <li>
                 <button className="px-6 py-2 rounded-2xl bg-stone-800 text-stone-50 hover:text-stone-950" onClick={onCancel}>Cancel</button>
              </li>
              <li>
                 <button onClick={handalSave} className= "px-6 py-2 rounded-xl bg-stone-800 text-stone-50 hover:bg-stone-950 ">Save</button>
              </li>
           </menu>
           <div>
              <Input type="text" ref={title} label="Title" /> {/* custom component, {first create input file}, don't set underline input*/ }
              <Input ref={description} label="Description" textarea />
              <Input type="date" ref={duedate} label="Due Date " />
           </div>
           </div>
           </>
           
    )
}
export default NewProject;