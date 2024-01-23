import { useState} from "react";
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
            <p >UserName</p>
            <input  placeholder="Enter UserName" required></input><br/>
            <p >Password</p>
            <input id="password" type="password" placeholder="Enter Pasword" required></input><br/>
            <p >verify password</p>
            <input type="password" placeholder="verify Pasword" required></input><br/><div/>
            <button type="submit">Register</button>
        </form>
        <h3>To Login click </h3>
        <Link to={"/Login"}>Here</Link> </>
        }
        {continueReg && <RegisterForm userName={userName} password={password} />}
        </>) 
  };
  export default Register;