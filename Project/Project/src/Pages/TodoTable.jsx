import React from "react";
 
function TodoTable(props){
  const { allTodosData,todosData,setAllTodosData,setTodosData }= props;

  function  deleteTodo(ID) 
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
           setAllTodosData(allTodosData.filter(todo => todo.id !== ID) );
      }).catch(error => {
        console.error(error);
        console.log("Server error. try again later.")      
      });
    }
  function checkChange(event) {
    const  Id = event.target.id;
    const isChecked = event.target.checked;
    console.log(event.target.value)
    console.log(event.target.value)
    console.log(event.current)
      // Simple PUT request with a JSON body using fetch
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: checkboxId })
      };
      fetch(`http://localhost:3000/todos/${Id}`, requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ postId: data.id }));
  
    const updatedTodos = todosData.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
  }
return(
         <table>
            <thead>
              <tr><th>UserID</th>
              <th>id</th>
              <th>Titles</th> 
              <th>Completed</th>
              <th>Delete</th></tr>
            
            </thead>
          <tbody>
         
          {props.todosData.map((todo, index) => (
        <tr key={index}>
        <td>{todo.userId}</td>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td><input   id={todo.id} checked={todo.completed} type="checkbox" onChange={checkChange()} /></td>
        <td><button  onClick={() => deleteTodo(todo.id)}>🗑️</button></td>
        </tr>
        ))}
          </tbody>
        </table>)}
    
 
 export default TodoTable