 import React,{useEffect, useState} from "react";
import { useNavigate ,Outlet, NavLink,useParams} from "react-router-dom";
 
 
 function Home(){
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("User")))
    const navigate= useNavigate();
   const {userId}=useParams()

    const logOut=()=>{
        setCurrentUser(null)
        navigate("/");
        localStorage.clear; 
        
    }
    useEffect(()=>{{(currentUser===null||currentUser.id!=userId) && navigate("/") };},[currentUser])

 return(<>
         <h1>Home!!</h1>
         <NavLink onClick={()=>logOut()}>LogOut</NavLink><br/>
         <NavLink to="info">Info</NavLink><br/>
         <NavLink to="posts">Posts</NavLink><br/>
         <NavLink to="todos">Todos</NavLink><br/>
         <NavLink to="albums">Albums</NavLink><br/>
         <Outlet/>
        </>) 
  };
  export default  Home;

