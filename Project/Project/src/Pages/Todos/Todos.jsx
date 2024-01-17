import React,{useEffect,useState} from "react";
import TodosDisplay from "./TodosDisplay";
import { useNavigate } from "react-router-dom";
import AddTodo from "./AddTodo";
function Todos(){
    const navigate= useNavigate();
    const [todosData, setTodosData]=useState([]);
    const [allTodos, setAllTodos]=useState([]);
    const [isAdding,setIsAdding]=useState(false)
    let user=JSON.parse(localStorage.getItem("User")) 
    if(user.length != 0)
        user=user[0]
      
    /* const updatetodosData = (updated) => {
        setTodosData(updated);
      };
      const updateAllTodosData = (updated) => {
        setAllTodos (updated);
      };
      let addState={
        state: {
           todosData,
           allTodos,
           updatetodosData,
          updateAllTodosData,
        },
      }
       */
      const handleAddTodo = () => {
          //navigate(`./users/${user.id}/todos/add`,addState);
          setIsAdding(true)
      };
     
    useEffect(()=>{ 
        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(res=> (setTodosData(res)))
        .catch(err=>console.log(err));
        fetch(`http://localhost:3000/todos`)
        .then(response => (response.json()))
        .then(res=> (setAllTodos(res)))
        .catch(err=>console.log(err));
       },[])

       
    
 
return( <>
<button onClick={()=>navigate("/home")}>Back</button>

 <TodosDisplay  setAllTodos={setAllTodos} allTodos={allTodos} setTodosData={setTodosData} todosData={todosData} />
<button onClick={handleAddTodo}>Add ToDo</button>
 {isAdding &&<AddTodo setIsAdding={setIsAdding} todosData={todosData} allTodos={allTodos} setTodosData={setTodosData}  setAllTodos={ setAllTodos}/>}
    </>
    )
}

export default Todos