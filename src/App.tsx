import React from "react";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { Main } from "./pages/Main/Main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const App: React.FC = () => {
  const login = useSelector((state: any )=> state.authReducer.isLogin)

  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      navigate("/usr")
      console.log(login)
    }
  }, [])
  
  return (
    <div className="page">
      <Menu />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/usr' element={<Main />} />    
      </Routes>
    </div>
  );
};
