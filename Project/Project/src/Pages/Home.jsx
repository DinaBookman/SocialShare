 import React,{useState} from "react";
 import Info from './Info'
import { useNavigate } from "react-router-dom";
 
 
 function Home(){
    const [isShowInfo, setIsShowInfo]=useState(false);
    const navigate= useNavigate();
    let user=JSON.parse(localStorage.getItem("User")); 
    if(user.length != 0)
        user=user[0];

    function logOutFunc(){
        localStorage.removeItem("User");
        navigate("/login");
    }

     

     
    function posts(){
        navigate("./posts");
    }


 

    return(<>
         <h1>Home!!</h1>
          <button onClick={logOutFunc}>LogOut</button>
          <button>Albums</button>
          <button onClick={()=>navigate(`/users/${user.id}/Posts`)}>Posts</button>
          <button onClick={()=>navigate(`/users/${user.id}/todos`)}>Todos</button>
          <button onClick={()=>navigate(`/users/${user.id}/Info`,{state:{user:user}})}>Info</button>
          {isShowInfo &&<Info user={user}/> 
            
            
            }
            
        </>) 
  };
  export default  Home;

