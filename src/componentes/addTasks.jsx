import React,{useState} from 'react';
import Button from './button.jsx';



const AddTasks=({handleTaskAddition})=>{

	const [inputData,setIpuntData]=useState("");

	const handleIpuntChange=(e)=>{
		setIpuntData(e.target.value);
	};

	const handleAddTaskClick=()=>{
      
      handleTaskAddition(inputData);


	};
 
 return(
 	<div className="add-tasks-container">
 		<input value={inputData} onChange={handleIpuntChange}className="add-task-input" type="text"/>
 		<Button onClick={handleAddTaskClick}>adicionar</Button>
 	</div>);



};

export default AddTasks;