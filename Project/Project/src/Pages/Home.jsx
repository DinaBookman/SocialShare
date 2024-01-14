import React from "react";
import { Link } from "react-router-dom";

 function Home(){

    let user=JSON.parse(localStorage.getItem("User"));
console.log(user.id, user.name)
    function logOutFunc(){
        localStorage.removeItem("User");
    }

    return(<>
         <h1>Home!!</h1>
          <button onClick={logOutFunc}>LogOut</button>
          <button>Albums</button>
          <button>Posts</button>
          <button>Todos</button>
          <button>Info</button>
        </>) 
  };
  export default  Home;

