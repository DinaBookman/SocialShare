import React,{useEffect,useState} from "react";
import TodoTable from "./TodoTable";
import  AddTodo from "./AddTodo";
function Todos(){
    const [todosData, setTodosData]=useState([]);
    const [addTodoForm,setAddTodosForm]=useState(false);
    const [allTodosData, setAllTodosData]=useState([]);
    let user=JSON.parse(localStorage.getItem("User")) 
    if(user.length != 0)
        user=user[0]
     let list = [...todosData];
     
     
    useEffect(()=>{ 
        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(res=> (setTodosData(res)))
        .catch(err=>console.log(err));
        fetch(`http://localhost:3000/todos`)
        .then(response => (response.json()))
        .then(res=> (setAllTodosData(res)))
        .catch(err=>console.log(err));
       },[])

       
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
                list.sort((todo1, todo2) => (todo1.id > todo2.id) ? 1 : -1);
                setTodosData(list)
                break;
            default:
            break;
         }
      }
        
 
   
 

 
    
 
return( <>
    <select  onChange={handleOrder}>
        <option value="random">random</option>
        <option value="alphabetical">alphabetical Order</option>
        <option value="completed">Completed</option>
        <option value="serial">Serial order</option> 
    </select>
    <TodoTable  setAllTodosData={setAllTodosData} allTodosData={allTodosData} setTodosData={setTodosData} todosData={todosData} />
     <button onClick={()=>setAddTodosForm(true)}>Add ToDo</button>
        {addTodoForm && <AddTodo allTodosData={allTodosData} todosData={todosData} setAllTodosData={setAllTodosData} setTodosData={setTodosData} user={user}/>}
        </>
    )
}

export default Todos