import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/Main/Main";
import { Profile } from "./pages/Profile/Profile";
import { Templates } from "./pages/Templates/Templates";
import { Projects } from "./pages/Projects/Projects";
import { GraphicsEditor } from "./pages/GraphicsEditor/GraphicsEditor";

import { Menu } from "./features/Menu/Menu";

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
