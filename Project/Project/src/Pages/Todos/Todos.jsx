import React,{useEffect,useState} from "react";
import TodosDisplay from "./TodosDisplay";
import { useNavigate } from "react-router-dom";
import AddTodo from "./AddTodo";
function Todos(){
    const navigate= useNavigate();
    const [todosData, setTodosData]=useState([]);
    const [isAdding,setIsAdding]=useState(false)
    let user=JSON.parse(localStorage.getItem("User")) 
      
    
      const handleAddTodo = () => {
          setIsAdding(true)
      };
     
    useEffect(()=>{ 
        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(res=> (setTodosData(res)))
        .catch(err=>console.log(err));
       },[])

       
    
 
return( <>
<button onClick={()=>navigate("/home")}>Back</button>

 <TodosDisplay   setTodosData={setTodosData} todosData={todosData} />
<button onClick={handleAddTodo}>Add ToDo</button>
 {isAdding &&<AddTodo setIsAdding={setIsAdding} todosData={todosData}   setTodosData={setTodosData}/>}
    </>
    )
}

export default Todos