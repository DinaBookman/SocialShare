 import React,{useEffect, useState} from "react";
import { useNavigate ,Outlet, NavLink,useParams} from "react-router-dom";
import style from './Home.module.css'
 
 
 function Home(){
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("User")))
    const navigate= useNavigate();
   const {userId}=useParams()
    useEffect(() => {
        if (currentUser === null) {
          navigate("/");
        }
      }, [currentUser]);
    
      const logOut = () => {
        localStorage.clear();
        setCurrentUser(null);
      };
      
 return(<>
 {currentUser&&<>
         <h1>Welcome {currentUser.name}</h1>
         <p className={style.allBtns}>
         <NavLink className={style.btn} to="info">Info</NavLink><br/>
         <NavLink className={style.btn} to="todos">ToDos</NavLink><br/>
         <NavLink className={style.btn} to="posts">Posts</NavLink><br/>
         <NavLink className={style.btn} to="albums">Albums</NavLink><br/>
         <NavLink className={style.btn} onClick={()=>logOut()}>LogOut</NavLink><br/>
         </p></>}
         <Outlet/>
        </>) 
  };
  export default  Home;

