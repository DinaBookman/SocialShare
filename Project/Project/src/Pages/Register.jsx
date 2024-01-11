import React from "react";
import { Link } from "react-router-dom";

 function Register(){

    return(<>
        <form>
            <label for="userName">UserName</label>
            <input id="userName" placeholder="Enter UserName"></input><br/>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Pasword"></input><br/>
            <label for="verPassword">verify password</label>
            <input id="verPassword" type="verPassword" placeholder="verify Pasword"></input>
        </form>
        <button>Register</button>
        <h3>To </h3>
        <Link to={"/Login"}>
                     Login
                 </Link>
          
        </>) 
  };
  export default Register;