import  React from 'react'
import './App.css'
import NoPage from './Pages/NoPage.jsx'
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
