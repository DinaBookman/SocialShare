import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import TodosDisplay from "./TodosDisplay";
import AddTodo from "./AddTodo";

function Todos(){
    const [todos, setTodos] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/todos/?userId=${userId}`)
            .then(response => (response.json()))
            .then(res => (setTodos(res)))
            .catch(err => console.log(err));
    }, [])

    return (<>
         <h1>ToDos</h1>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodosDisplay setTodos={setTodos} todos={todos} />
    </>)
} export default Todos

