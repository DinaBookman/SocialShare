import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import TodosDisplay from "./TodosDisplay";
import AddTodo from "./AddTodo";

function Todos(){
    const [todos, setTodos] = useState([]);
    const { userId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/todos/?userId=${userId}`)
            .then(response => response.json())
            .then(res => {
                setTodos(res);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Error fetching todos. Please try again.");
                setLoading(false);
            });
    }, []);
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h1>ToDos</h1>
                    <AddTodo todos={todos} setTodos={setTodos} />
                    <TodosDisplay setTodos={setTodos} todos={todos} />
                </>
            )}
        </>
    );
} export default Todos

