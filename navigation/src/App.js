import React from "react";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./pages/Navigation";
export default function(){
  return(
    <div>
      <Routes>
        <Route path = "/" element = {<WelcomePage/>}/>
        <Route path = "/home" element = {<HomePage/>}/>
        <Route path = "/navigation" element = {<Navigation/>}/>
      </Routes>
      
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}