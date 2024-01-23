import { useState} from "react";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import style from '../Pages/Register.module.css'

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


    return(
    <>
          <h1>Registration</h1>
        { !continueReg && <> <form className={style.registerForm} onSubmit={registerFunc}>
            <label className={style.registrationLabel}>UserName</label>
            <input className={style.registerInput} placeholder="Enter UserName" required></input><br/>
            <label className={style.registrationLabel}>Password</label>
            <input className={style.registerInput} id="password" type="password" placeholder="Enter Pasword" required></input><br/>
            <label className={style.registrationLabel}>verify password</label>
            <input className={style.registerInput} type="password" placeholder="verify Pasword" required></input>
            <button className={style.registerBtn} type="submit">Register</button>
        </form>
        <Link className={style.loginLink} to={"/Login"}>👇🏻 To Login click Here</Link> </>
        }
        {continueReg && <RegisterForm userName={userName} password={password} />}
        </>) 
  };
  export default Register;