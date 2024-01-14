import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


 function Register(){
    const navigate= useNavigate();


    function registerFunc(event){
        event.preventDefault();
        let userName=event.target[0].value;
        let password=event.target[1].value;
        let verifyPassword=event.target[2].value;
        if(password!=verifyPassword){
            alert("The verified password does not match the password")
            return;
        }
        fetch(`http://localhost:3000/users/?username=${userName}`, {method:"HEAD"})
            .then(response=>{
            console.log(response)
            response.status!=200?alert("UserName already exists."): navigate('/registerForm', {state:{UserName:userName, Website:password}})
            ;
        })
    }


    return(<>
        <form onSubmit={registerFunc}>
            <label>UserName</label>
            <input placeholder="Enter UserName" required></input><br/>
            <label >Password</label>
            <input id="password" type="password" placeholder="Enter Pasword" required></input><br/>
            <label >verify password</label>
            <input type="verPassword" placeholder="verify Pasword" required></input>
            <button type="submit">Register</button>
        </form>
        <h3>To Login click </h3>
        <Link to={"/Login"}>
                     Here
                 </Link>
          
        </>) 
  };
  export default Register;