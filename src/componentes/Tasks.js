import React from 'react';
import Task from './Task.jsx'

const Tasks=({tasks,handleTaskClick, deleteTasks})=>{


	return(
	<>
	  {tasks.map((task)=>(<Task task={task} handleTaskClick={handleTaskClick} deleteTasks={deleteTasks}/>))}
	</>);
};

export default Tasks;
