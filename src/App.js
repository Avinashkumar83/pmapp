

import { useState } from "react";
import NewProject from "./Component/NewProject";
import NoProjectSelected from "./Component/NoProjectSelected";
import ProjectsSidebar from "./Component/ProjectsSidebar";
import SelctedProject from "./Component/SelectedProject";
// import State from "./State/State";

function App() {
  const[projectsState, setProjectsState]=useState({
    selectedProjectId:undefined,    // were doing nathing
    projects:[],   //store the id of projects
    tasks:[]
  });

  function handalAddTasks(text){
    setProjectsState(prevState =>{
      const taskId = Math.random();
      const NewTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,

      }
      return{
        ...prevState,  // creating new obect    // or using undefine,projectId
        tasks:[NewTask, ...prevState.tasks]    //update array object(project[]), copy all the old project(...prevState)spered operator into this new array(...prevState.project)
      }
    })

  }

  function handalDeleteTasks(id){

    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined, 
        tasks:prevState.tasks.filter((task)=> task.id !== id)
      };
  }); 

  }

  function handalSelectProject(id){
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: id, 
      };
  }); 

  }


  function  handalStaratAddProject(){   //then should be change null.could be a fitting name
    setProjectsState(prevState =>{
        return{
          ...prevState,
          selectedProjectId:null, // we are adding new project
        };
    }); 
  } 

  function handalCancelAddProject(){
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined, 
      };
  }); 

  }
  
  function handalAddProject(projectData){
    setProjectsState(prevState =>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id:projectId,

      }
      return{
        ...prevState,  // creating new obect
        selectedProjectId: undefined, // or using undefine,projectId
        projects:[...prevState.projects,newProject],    //update array object(project[]), copy all the old project(...prevState)spered operator into this new array(...prevState.project)
      }
    })
  }

  function handalDeleteProject(){
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined, 
        projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
      };
  }); 
  }
  
  const selectedProjectId =projectsState.projects.find(project =>project.id===projectsState.selectedProjectId);
  // find like map is a method built in vanilla javascript that take a function as an argument
  //that take a function as an argument ,a function that will be executed for every element in array
  
  let content =<SelctedProject project={selectedProjectId } 
      onDelete={handalDeleteProject} 
      onAddTask={handalAddTasks}
      onDeleteTask={handalDeleteTasks}
      tasks={projectsState.tasks}
      selectedProjectId={projectsState.selectedProjectId}
      />

  if(projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handalAddProject} onCancel={handalCancelAddProject}/>
  }
   else if(projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handalStaratAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar  onStartAddProject={handalStaratAddProject} 
         projects={projectsState.projects}        /* that this array of object were managing here our state */
         onSelectProject={handalSelectProject}
      />
      {content}
     
    </main>
    
  );
}

export default App;
