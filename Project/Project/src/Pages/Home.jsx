import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

 function Home(){
    const [isShowInfo, setIsShowInfo]=useState(false);
    const navigate= useNavigate();
    const user=JSON.parse(localStorage.getItem("User"));    

    function logOutFunc(){
        localStorage.removeItem("User");
        navigate("/login");
    }

    function showInfo(){
        setIsShowInfo(true)
    }

    function showTodos(){
        setIsShowInfo(false);
        fetch(`http://localhost:3000/todos/?userId=${user[0].id}`)
        .then(response => (response.json()))
        .then(response => console.log(response));
    }

    return(<>
         <h1>Home!!</h1>
          <button onClick={logOutFunc}>LogOut</button>
          <button>Albums</button>
          <button>Posts</button>
          <button onClick={showTodos}>Todos</button>
          <button onClick={showInfo}>Info</button>

          {isShowInfo &&
            <form>
                <p>ID: {user[0].id}</p>
                <p>Name: {user[0].name}</p>
                <p>User Name: {user[0].username}</p>
                <p>User Email: {user[0].email}</p>
                <p>User Adress:</p>
                <p>street: {user[0].address.street}</p>
                <p>Suite: {user[0].address.suite}</p>
                <p>City: {user[0].address.city}</p>
                <p>Zipcode: {user[0].address.zipcode}</p>
                <p>User Geo</p>
                <p>Lat: {user[0].address.geo.lat}</p>
                <p>Lng: {user[0].address.geo.lng}</p>
                <p>Phone: {user[0].phone}</p>
                <p>website: {user[0].website}</p>
                <p>Company:</p>
                <p>Name: {user[0].company.name}</p>
                <p>CatchPhrase: {user[0].company.catchPhrase}</p>
                <p>Bs: {user[0].company.bs}</p>
            </form>
            }
        </>) 
  };
  export default  Home;

