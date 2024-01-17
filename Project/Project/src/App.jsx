import  React from 'react'
import './App.css'
import NoPage from './Pages/NoPage.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Home from './Pages/Home.jsx'
import Todos from './Pages/Todos/Todos.jsx'
import AddTodo from './Pages/Todos/AddTodo.jsx'
import UpdateTodo from './Pages/Todos/UpdateTodo.jsx'
import UpdatePost from './Pages/Posts/UpdatePost.jsx'
import Posts from './Pages/Posts/Posts.jsx'
import Info from './Pages/Info.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddNewPost from './Pages/Posts/AddNewPost.jsx'
 

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
         <Route path="home" element={<Home/>}/>
          <Route path='users/:userId/todos' element={<Todos/>}>
                  <Route path='./users/:userId/todos/add' element={<AddTodo/>} />
                  <Route path='./:todiId/update' element={<UpdateTodo /> }></Route>
          </Route>
          <Route path='users/:userId/Posts' element={<Posts/>}>
                  <Route path='./users/:userId/Posts/add' element={<AddNewPost/>} />
                  <Route path='./:todiId/update' element={<UpdatePost/> }></Route>
          </Route>
          <Route path='users/:userId/*' element={<Info/>}/> 
          <Route path="home/posts" element={<Posts/>}/>
          <Route path="*" element={<NoPage/>}/>
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
