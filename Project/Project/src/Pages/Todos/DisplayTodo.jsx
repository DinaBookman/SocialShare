import React from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo  from "./UpdateTodo"
function DisplayTodo(props){
    const {todo,todosData,setTodosData}=props;
    
 const updateTodo={...todo,"completed:":!todo.Completed}
    function checkChange() {
        fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
            "Completed": !todo.completed 
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        setTodosData(todosData.map((prevTodo)=>(prevTodo.id==todo.id)?updateTodo:prevTodo))
    };
  
     
return(<>
<strong>userId:</strong>{todo.userId} <br/>
 <strong>TodoID:</strong>{todo.id} <br/>
 <strong>Title</strong>{todo.title} <br/>
 <UpdateTodo todo={todo} setTodosData={setTodosData} todosData={todosData}/><br/> 
 <DeleteTodo todo={todo} setTodosData={setTodosData} todosData={todosData}/> 

     </>)
}
export default DisplayTodo