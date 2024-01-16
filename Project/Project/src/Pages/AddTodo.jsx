 import React from "react";
function AddTodo(props){
    const { allTodosData,todosData,setAllTodosData,setTodosData,user}= props;
    function addTodo(event) {
        let allTodosList=[...allTodosData];
        allTodosList.sort((todo1,todo2)=>parseInt(todo1.id) > parseInt(todo2.id) ? 1 : -1)
        let idValue=(parseInt(allTodosList[allTodosList.length-1].id)+1);
        (console.log(idValue.toString()))
        let newTodo = {
            "userId": user.id,
            "id": idValue.toString(),  
            "title": event.target[0].value,
            "completed": false
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        }
        fetch('http://localhost:3000/todos', requestOptions)
            .then(data => {
                setTodosData([...todosData, data]);
                setAllTodosData([...allTodosData,data])  
            })
            .catch(error => console.error(error));
    
        
    }
    return(<><form onSubmit={addTodo}><h3>Add Title</h3>
    <input type="text"></input>
      <button type="submit">Add</button></form></>)
}
export default AddTodo