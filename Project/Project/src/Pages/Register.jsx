import { useState } from "react";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

 function Register(){
    const [continueReg, setContinueReg]=useState(false);
    const [userName, setUserName]=useState("");
    const[password, setPasword]=useState("");

    function registerFunc(event){
        event.preventDefault();
        let _userName= event.target[0].value;
        let _password= event.target[1].value;
        let verifyPassword=event.target[2].value;
        if(_password!=verifyPassword){
            alert("The verified password does not match the password")
            return;
        }
        fetch(`http://localhost:3000/users/?username=${_userName}`,)
            .then(response => response.json())
            .then(response=>
                response.length!=0?alert("UserName already exists."):setContinueReg(true))
        setUserName(_userName);
        setPasword(_password);
    }


    return(<>
        { !continueReg && <> <form onSubmit={registerFunc}>
            <label>UserName</label>
            <input placeholder="Enter UserName" required></input><br/>
            <label >Password</label>
            <input id="password" type="password" placeholder="Enter Pasword" required></input><br/>
            <label >verify password</label>
            <input type="password" placeholder="verify Pasword" required></input>
            <button type="submit">Register</button>
        </form>
        <h3>To Login click </h3>
        <Link to={"/Login"}>Here</Link> </>
        }
        {continueReg && <RegisterForm userName={userName} password={password} />}
        </>) 
  };
  export default Register;