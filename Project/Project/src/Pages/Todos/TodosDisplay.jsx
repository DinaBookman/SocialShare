import React,{useState} from "react";
import DisplayTodo from "./DisplayTodo";
function TodosDisplay(props){
  const {todosData ,setTodosData }= props;
  let  list = [...todosData];
  const [filter,setFilter]=useState("All")
  const [title,setTitle]=useState('')
  const [id,setId]=useState('')
  
       function isFiltered(todo){
         switch(filter){
            case"All":
            return true
            case "ID":
                 return(todo.id.includes(id))? true:false;
            case "Title":
                 return(todo.title.includes(title))?true:false
            case "Completed":
                 return(todo.completed)
            case "UnCompleted":
                return(!todo.completed)
        }
    }
  
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
  {todosData.map((todo) => isFiltered(todo) && <DisplayTodo  todo={todo} setTodosData={setTodosData} todosData={todosData}/>)}

 
 
<select name="filter by" id="filter" value={filter} onChange={(event)=>setFilter(event.target.value)}>
                    <option value="All">All</option>
                    <option value="ID">ID</option>
                    <option value="Completed">Completed</option>
                    <option value="UnCompleted">UnCompleted</option>
                </select>
    { filter==='Title'&&
      <>  <label>Enter wanted Title</label>
        <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}></input></>}
        { filter==='ID'&&
      <>  <label>Enter wanted Id</label>
        <input type="number" value={id} onChange={(event)=>setId(event.target.value)}></input></>}</>

         )}
    
 
 export default TodosDisplay