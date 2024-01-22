 import React,{useEffect, useState} from "react";
import { useNavigate ,Outlet, NavLink,useParams} from "react-router-dom";
import style from './Home.module.css'
 
 
 function Home(){
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("User")))
    const navigate= useNavigate();
   const {userId}=useParams()

    function logOut(){
        setCurrentUser(null)
        navigate("/")
        localStorage.clear
        
    }
    useEffect(()=>{{(currentUser===null||currentUser.id!=userId) && navigate("/") };},[currentUser])

 return(<>
         <h1>Welcome {currentUser.name}</h1>
         <p className={style.allBtns}>
         <NavLink className={style.btn} to="info">Info</NavLink><br/>
         <NavLink className={style.btn} to="todos">Todos</NavLink><br/>
         <NavLink className={style.btn} to="posts">Posts</NavLink><br/>
         <NavLink className={style.btn} to="albums">Albums</NavLink><br/>
         <NavLink className={style.btn} onClick={()=>logOut()}>LogOut</NavLink><br/>
         </p>
         <Outlet/>
        </>) 
  };
  export default  Home;

