import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 function Login(){
    const navigate= useNavigate();

    function loginFunc(event){
        event.preventDefault();
        let userName=event.target[0].value;
        let password=event.target[1].value;
        fetch(`http://localhost:3000/users/?username=${userName}&website=${password}`)
        .then(response => (response.json()))
        .then(response=>{
            response.length==0?alert("No such user. Please register"): successLogin(response)
        })
    }
    
    function successLogin(response){
        let localUser={
            "id": response[0].id,
            "name": response[0].name,
    }
        localStorage.setItem("User" , JSON.stringify(localUser));
        navigate(`/users/${response[0].id}/home`)
    }
    
    return(<>

        <form onSubmit={loginFunc}>
            <label>UserName</label>
            <input  placeholder="Enter UserName" required></input><br/>
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