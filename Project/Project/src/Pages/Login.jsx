import React from "react";
import { Link } from "react-router-dom";
 function Login(){

    function loginFunc(){
         
                  
                
    }
    return(<>

        <form>
            <label for="userName">UserName</label>
            <input id="userName" placeholder="Enter UserName"></input><br/>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Pasword"></input>
        </form>
        <button onClick={loginFunc()}>Login</button>
        <h3>To </h3>
        <Link  to={"/register"}>
                     Register 
                </Link>
          
        </>) 
  };
  export default Login