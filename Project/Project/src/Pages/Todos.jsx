import React from "react";
import { useState } from "react";

function Todos(){
    const [isShowTodos, setIsShowTodos]=useState(false);
    const [todosData, setTodosData]=useState([]);
    
    function showTodos(){
        fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(data => {setTodosData(data)
            return(<p>{data[1]}</p>)
        })
        setIsShowTodos(true)
        
    }






    return( 
        <>
        {/* {showTodos()} */}
        <h1>Todos!!</h1>
        </>
    )
}

export default Todos