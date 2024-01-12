import React from "react";
import { Link } from "react-router-dom";

 function Register(){

    return(<>
        <form>
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