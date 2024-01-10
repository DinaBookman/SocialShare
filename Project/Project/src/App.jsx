import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route  path="login" element={<Login />} />
          <Route  path="register" element={<Register/>} />
         
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
