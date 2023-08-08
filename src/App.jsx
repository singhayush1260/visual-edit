import "./App.scss";
import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Editor from "./pages/editor/Editor";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location=useLocation();
  const isAuthPage= location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
   
      <AnimatePresence> 
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/editor" element={ <Editor/> }/>
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
