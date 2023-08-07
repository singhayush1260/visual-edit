import "./App.scss";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <Signup/> }/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
