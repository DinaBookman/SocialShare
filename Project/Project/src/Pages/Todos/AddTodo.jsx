 import React,{useEffect,useState} from "react";
 import { useNavigate,useLocation,useParams } from "react-router-dom";
  

 
  // Access the 'id' parameter from the URL
  
function AddTodo(props){
    /*const navigate=useNavigate()
    const location=useLocation()
    const  {state}=location ;
    const { allTodosData,todosData,setAllTodosData,setTodosData}= state;*/
    const { userId } = useParams();
    const { allTodos,todosData,setAllTodos,setTodosData,setIsAdding}=props;
    
     
 
        
        let id;
    async function  addTodo(event) {
    event.preventDefault()
    const response = await fetch("http://localhost:3000/nextID");
    const json = await response.json();
    const { nextTodoId } = json[0];
    console.log(nextTodoId);
     id=nextTodoId
    console.log(id)
            
    fetch("http://localhost:3000/nextID/1", {
        method: "PATCH",
        body: JSON.stringify({
            "nextTodoId": id + 1  
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
         
        let newTodo = {
            "userId": userId,
            "id": id.toString(),  
            "title": event.target[0].value,
            "completed": false
        }
        console.log(newTodo)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        }
        fetch('http://localhost:3000/todos', requestOptions)
            .then(data => {
                setTodosData([...todosData,newTodo]);
                setAllTodos([...allTodos ,newTodo])  
            })
            .catch(error => console.error(error));
            setIsAdding(false)
        
    }
    return(<><form onSubmit={addTodo}><h3>Add Title</h3>
    <input type="text"></input>
      <button type="submit">Add</button></form>
      <button onClick={()=>navigate("/")}>Back</button></>)
}
export default AddTodo