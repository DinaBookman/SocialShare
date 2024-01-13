import React from "react";
import { Link, json } from "react-router-dom";
 function Login(){

    const users = JSON.parse(localStorage.getItem('users'))|| [];

    function loginFunc(event){
        event.preventDefault();
        let userName=event.target[0].value;
        let password=event.target[1].value;
        fetch(`http://localhost:3000/users/?username=${userName}&website=${password}`)
        .then(response => (response.json()))
        .then(response=>{
            console.log(response)
            users.push(...users, JSON.stringify(response))
            localStorage.setItem("users" ,users)
        })
    }
    return(<>

        <form onSubmit={loginFunc}>
            <label>UserName</label>
            <input placeholder="Enter UserName" required></input><br/>
            <label >Password</label>
            <input type="password" placeholder="Enter Pasword" required></input>
            <button type="submit">Login</button>
        </form>
        <h3>To register click </h3>
        <Link  to={"/register"}>
                     Here 
                </Link>
          
        </>) 
  };
  export default Login