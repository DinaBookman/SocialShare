import React,{useEffect,useState} from "react";
function Todos(){
    const [todosData, setTodosData]=useState([]);
    let user=JSON.parse(localStorage.getItem("User")); 
    if(user.length != 0)
        user=user[0];

    useEffect(()=>{ 
        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(res=> (setTodosData(res)))
        .catch(err=>console.log(err));
       },[])
return( 
        <>
        <table>
             <thead>
                <th>UserID</th>
                <th>id</th>
                <th>Completed</th> 
                 
            </thead>
            <tbody>
                 {todosData.map((todo,index)=>{
                    return(<><tr key={index}></tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>

                     </>)
                 })}
            </tbody>
        </table>
         
        </>
    )
}

export default Todos