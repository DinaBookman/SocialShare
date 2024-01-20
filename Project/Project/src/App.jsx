import React from 'react'
import './App.css'
import NoPage from './Pages/NoPage.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Home from './Pages/Home.jsx'
import Todos from './Pages/Todos/Todos.jsx'
import Photos from './Pages/Photos/Photos.jsx'
import Albums from './Pages/Albums/Albums.jsx'
import Posts from './Pages/Posts/Posts.jsx'
import Info from './Pages/Info.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 


function App() {
  const currentUser=JSON.parse(localStorage.getItem("User"));
  console.log(currentUser)
  const currentPage=currentUser? `/users/${currentUser.id}/home`:"/login";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={currentPage} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="users/:userId/home" element={<Home />}>
            <Route path='todos' element={<Todos />} />
            <Route path='posts' element={<Posts />}/>
            <Route path='albums' element={<Albums />}/>
            <Route path='albums/:albumId/photos' element={<Photos />}/>
            <Route path='info' element={<Info />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
