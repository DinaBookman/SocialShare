import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from '../Pages/Login.module.css'

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
    {/* <div className={style.loginDiv}> */}
        
        <h1>Login</h1>
        <form className={style.loginForm} onSubmit={loginFunc}>
            <label className={style.loginLabel}>UserName</label>
            <input className={style.loginInput}  required></input><br/>
            <label className={style.loginLabel}>Password</label>
            <input className={style.loginInput}  type="password" required></input>
            <button className={style.loginBtn} type="submit">Login</button>
        </form>
        <Link className={style.registrationLink} to={"/register"}>
        👇🏻
        To register click Here  
                </Link>
          {/* </div> */}
        </>) 
  };
  export default Login