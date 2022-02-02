import React, { useState } from 'react';
import './App.css';
import Tasks from './componentes/Tasks.js';
import AddTasks from './componentes/addTasks.jsx';


const App=()=>
{
  // const messagem="maia"
  const [tasks,setTasks]=useState
  ([
    {
    id:'1',
    title:'joao',
    completed:'false',
  },
  {
    id:'2',
    title:'estudar react',
    completed:'true',
  },

  
  
  ]);

  const handleTaskAddition=(taskTitle)=>
  {

    const newTasks=[...tasks, {

      title:taskTitle,
      id:Math.random(10),
      completed:false




    },];
    setTasks(newTasks);


  };

  const handleTaskClick=(taskId)=>{

    const newTasks=tasks.map((task)=>
      {if(task.id==taskId) return {...task, completed:!task.completed};
    
       return task;

  });
    setTasks(newTasks);

  };

  
  const deleteTasks=(taskId)=>{
   const newTasks=tasks.filter(task => task.id!=taskId);
   setTasks(newTasks);
  }

   return(<>
           <div className="container">
             <AddTasks handleTaskAddition={handleTaskAddition} />
             <Tasks tasks={tasks} handleTaskClick={handleTaskClick} deleteTasks={deleteTasks}  />
           </div>
           </>

          );
};


export default  App;