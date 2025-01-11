import React, {useState} from 'react';

function ToDoList(){

    const[tasks, setTasks]= useState(["GO TO GYM"]);
    const[newTask, setNewTask]= useState("");

    function handleInputChangeEvent(event){
        setNewTask(event.target.value)

    }
    function addTasks(){
        if (newTask.trim() !=="") {
            setTasks(t=>[...t,newTask])
            setNewTask("");
        }
                
    }
    function deleteTasks(index){
        const updateTask= tasks.filter((_,i)=> i !==index);
        setTasks(updateTask)
    }
    function MoveTaskUp(index){
        if (index>0) {
            const updateTasks =[...tasks];
            [updateTasks[index],updateTasks[index-1]]= [updateTasks[index-1],updateTasks[index]];
            setTasks(updateTasks)
        }
    }
    function MoveTaskDown(index){
        if (index< tasks.length -1) {
            const updateTasks =[...tasks];
            [updateTasks[index],updateTasks[index+
                1]]= [updateTasks[index+1],updateTasks[index]];
            setTasks(updateTasks)
        }
    }

    return(
        <div className='ToDoList'>
            <h1 className='TD'> To-Do-List </h1>

            <div>
                <input type="text" placeholder=' Enter A Task'  value={newTask} onChange={handleInputChangeEvent}/>

                <button className='add-button' onClick={addTasks}>Add</button>
            </div>


            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={()=>deleteTasks(index)}>Delete</button>
                        <button className='move-button' onClick={()=>MoveTaskUp(index)}>Move Up</button>
                        <button className='move-button' onClick={()=>MoveTaskDown(index)}>Move Down</button>


                </li>
                )}
            </ol>




        </div>


    );

}

export default ToDoList