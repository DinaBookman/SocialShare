import React from "react";
import DisplayTodo from "./DisplayTodo";
function TodosDisplay(props){
  const { allTodos,todosData,setAllTodos,setTodosData }= props;
  let  list = [...todosData];
  
  /*function checkChange(event) {
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
  }*/
  const handleOrder = (event) => {
    switch (event.target.value) {
        case "random":
            list.sort(() => 0.5 - Math. random()); 
            setTodosData(list);
            break
        case "alphabetical":
            list.sort(function(todo1, todo2){ return todo1.title.localeCompare(todo2.title)})
            setTodosData(list)
            break
        case "completed":
            list.sort(function(todo1, todo2){ if (todo1.completed && !todo2.completed) {
                return -1;
            } else if (todo1.completed && !todo2.completed) {
                return 1;
            } else {
                return 0;
            } })
            setTodosData(list);
            break
        case "serial":
            list.sort((todo1, todo2) => (parseInt(todo1.id )> parseInt(todo2.id)) ? 1 : -1);
            setTodosData(list)
            break;
        default:
        break;
     }
  }
  function showSelect(){
    return <select  onChange={handleOrder}>
    <option value="random">random</option>
    <option value="alphabetical">alphabetical Order</option>
    <option value="completed">Completed</option>
    <option value="serial">Serial order</option> 
</select>
}
return(
  <>{showSelect()}
  <table>
  <thead>
    <tr><th>UserID</th>
    <th>id</th>
    <th>Titles</th> 
    <th>Completed</th>
    <th>Delete</th></tr>
  
  </thead>
<tbody>
{todosData.map((todo) => (
                <tr key={todo.id} >
                    {<DisplayTodo  todo={todo} setTodosData={setTodosData} todosData={todosData} allTodos={allTodos} setAllTodos={setAllTodos}/>}
                </tr>
            ))}

</tbody>
</table></>
         )}
    
 
 export default TodosDisplay