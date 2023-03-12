import React, { useCallback, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "./services/selectors/authSelector";

import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Templates } from "./pages/Templates";
import { Projects } from "./pages/Projects";
import { GraphicsEditor } from "./pages/GraphicsEditor";
import { Menu } from "./features/Menu/Menu";

import { useResizeDetector } from 'react-resize-detector';

export const App: React.FC = () => {
  //@ts-ignore
  const {isLogin} = useSelector(state => state.auth)

  const dispatch = useDispatch()
 
  const { width, ref } = useResizeDetector()
  useEffect(() => {
    if (width) {
      if (width >= 1140) {
        dispatch({ type: "DROP_MENU", payload: false});
        dispatch({type: "DROP_PROFILE_MENU", payload: false})
      }
    } 
  }, [width])
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/home")
    }
  }, [])

  return (
    <div className="page" ref={ref}>
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
