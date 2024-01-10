import React from "react";

 function Login(){
    return(<>
        <form>
            <label for="userName">UserName</label>
            <input id="userName" placeholder="Enter UserName"></input>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Pasword"></input>
        </form>
        </>) 
  };
  
  export default Login;