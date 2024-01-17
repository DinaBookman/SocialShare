import React from "react";
function deleteTodo(props){
    const {todo,todosData,setTodosData}=props;
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
            setTodosData(todosData.filter(todo => todo.id !== ID));
        }).catch(error => {
        console.error(error);     
        });
    }
    return(<><td><button  onClick={() => deleteTodo(todo.id)}>🗑️</button></td>
    </>)
}
export default deleteTodo