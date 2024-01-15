import React from "react";
import { useState } from "react";

function Todos(){
    const [todosData, setTodosData]=useState([]);
    
    let user=JSON.parse(localStorage.getItem("User")); 
    if(user.length != 0)
        user=user[0];

    function showTodos(){

        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(data => {
            console.log(data)
            setTodosData(data)
        })
        
    }






    return( 
        <>
        {showTodos}
        {/* {console.log(todosData[1])} */}
        <h1>Todos!!</h1>
        </>
    )
}

export default Todos