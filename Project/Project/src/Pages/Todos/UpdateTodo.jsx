 import  React, {useState,useEffect} from 'react';
 import {useParams} from "react-router-dom";
function UpdateTodo(props){
     const {todo,todosData,setTodosData}=props;
     const [inUpdate,setInUpdate]=useState(false)
     const [updatedTitle,setUpdatedTitle]=useState(todo.title)
     const {userId}=useParams();
     useEffect(()=>{setUpdatedTitle(updatedTitle)},[inUpdate]);
     const updateTodo=(event)=>{
        event.preventDefault()
        setInUpdate(false);
        if(todo.title===updatedTitle)
                return
        updateTodoRequest("title",updatedTitle)

     }
     const updateTodoRequest=(key,newValue)=>{
        const updatedTodo={...todo,[key]:newValue};
        fetch(`http://localhost:3000/todos/${todo.id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify({"userId":userId,...updatedTodo}),
        })
        .then(response=>{ 
            if(!response.ok){
                console.log(response.status)
                return
            }
            setTodosData(todosData.map((todo1)=>todo1.id===todo.id?updatedTodo:todo1));
     })}
    
    return(<><strong>completed:</strong>
    <input type='checkbox' checked={todo.completed} onChange={()=>updateTodoRequest("completed",!todo.completed)}/>
    <button onClick={()=>{setInUpdate((prev)=>!prev)}}>🖋</button>
    {inUpdate&& <form onSubmit={updateTodo}>
        <label  >Title</label>
        <input type='text' id='title' value={updatedTitle} onChange={(event) => {setUpdatedTitle(event.target.value)}} required/>
        <button type="submit">✔</button>
        </form>}
    </>)
}
export default UpdateTodo