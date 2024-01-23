import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
 function Login(){
    const navigate= useNavigate();
    const {currentUser,setCurrentUser}=useContext(UserContext)
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
        delete response[0]["website"];
        localStorage.setItem("User" ,[JSON.stringify(response[0])])
        setCurrentUser(response[0])
         navigate(`/users/${response[0].id}/home`)
    }
    
    return(<>

        <form onSubmit={loginFunc}>
            <p>UserName</p>
            <input  placeholder="Enter UserName..." required></input><br/>
            <p >Password</p>
            <input type="password" placeholder="Enter Pasword..." required></input><br/><div/>
            <button type="submit">Login</button>
        </form>
        <h3>To register click </h3>
        <Link  to={"/register"}>
                     Here 
                </Link>
          
        </>) 
  };
  export default Login