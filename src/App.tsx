import React from "react";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CurrentProvider } from "./hooks/contextMenu";

export const App: React.FC = () => {
  
  return (
   
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

  );
};
