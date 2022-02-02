import React from 'react';


const Task=({task,handleTaskClick,deleteTasks})=>{


 return(
    <div className="task-container" style={task.completed?{borderLeft:'5px solid green'}: {} } >
       
        <div  onClick={()=>handleTaskClick(task.id)}className="tasks-title">
          {task.title}
       </div>

        <div >
            <button className="delete-btn" onClick={()=>deleteTasks(task.id)}>X</button>
          </div>

         

    </div>
    );
    


}

export default Task;