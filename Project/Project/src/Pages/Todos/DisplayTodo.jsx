import React from "react";
function DisplayTodo(props){
    const {todo,todosData,allTodos,setAllTodos,setTodosData}=props;
    function deleteTodo(ID) 
    {   
        fetch(`http://localhost:3000/todos/${ID}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        }}).then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
            setTodosData(todosData.filter(todo => todo.id !== ID) );
            setAllTodos(allTodos.filter(todo => todo.id !== ID))
        }).catch(error => {
        console.error(error);     
        });
    }
     
return(<>
    <td>{todo.userId}</td>
<td>{todo.id}</td>
<td>{todo.title}</td>
<td><input   id={todo.id} checked={todo.completed} type="checkbox" onChange={()=>checkChange()} /></td>
<td><button  onClick={() => deleteTodo(todo.id)}>🗑️</button></td>
     </>)
}
export default DisplayTodo