import React from "react";
import { Menu } from "./features/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { Main } from "./pages/Main/Main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Profile } from "./pages/Profile/Profile";
import { Templates } from "./pages/Templates/Templates";
import { Projects } from "./pages/Projects/Projects";
import { GraphicsEditor } from "./pages/GraphicsEditor/GraphicsEditor";

export const App: React.FC = () => {
  const login = useSelector((state: boolean | any )=> state.authReducer.isLogin)

  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      navigate("/home")
    }
  }, [])
  
  return (
    <div className="page">
      <Menu />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/home' element={<Main />} />    
        <Route path="/templates" element={<Templates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editor' element={<GraphicsEditor />} />
      </Routes>
    </div>
  );
};
