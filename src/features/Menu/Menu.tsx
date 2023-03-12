import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useAsyncValue,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Navigation } from "../../components/Menu/Navigation";
import { DropMenu } from "../../components/drop-menu/drop-menu";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { Auth } from "../Auth/Auth";
import { Registration } from "../../features/Registration/Registration";

import { IPopup } from "./types";
import { EMenu } from "./EMenu";
import { twMerge } from "tailwind-merge";
import { DropSizes } from "./CanvasSize";

const test = require("../../assets/images/test.png");
const logo = require("../../assets/images/Logo.svg");

export const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLogin = useSelector(
    (state: boolean | any) => state.authReducer.isLogin
  );
  const isProfile = useSelector(
    (state: boolean | any) => state.profileReducer.isProfile
  );
  const drop = useSelector((state: boolean | any) => state.dropReducer.drop);
  const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_);
  const drop_canvas_settings = useSelector((state: boolean | any) => state.dropReducer.canvasSize)
  const location = useLocation();
  const [reg, setReg] = useState<any>({
    email: null,
    password: null,
    password2: null,
    phone: null,
    first_name: null,
  });
  const [popup, setPopup] = useState<IPopup>({ register: false, auth: false });

  const showRegistrationHandle = () => {
    // document.title = `Creatiqa Регистрация`;
    setPopup({ register: true, auth: false });
  };
  const closeHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.title = `Creatiqa`;
    setPopup({ register: false, auth: false });
  };
  const showLoginHandle = () => {
    // document.title = `Creatiqa Вход`;
    setPopup({ register: false, auth: true });
  };
  const dropHandler = () => {
    dispatch({ type: "DROP_MENU", payload: !drop });
  };
  useEffect(() => {
    location.pathname == "/profile"
      ? dispatch({ type: "IS_PROFILE", payload: true })
      : dispatch({ type: "IS_PROFILE", payload: false });
  }, [location]);

  const handleEditor = () => {
    // dispatch({type: "CANVAS_SIZE_DROP", payload: true})

    return navigate('/editor')
  };

  return (
    <>
    {drop_canvas_settings && <DropSizes />}
      {location.pathname == "/editor" ? (
        <EMenu />
      ) : (
        <div className="menu">
          {drop_ && (
            <div className="w-screen h-full fixed top-0 left-0 bg-[#000000]/20">
              <div className="relative h-screen w-[300px] z-1 bg-white">
                <JoinNavigation />
              </div>
            </div>
          )}
          {!isProfile && <DropMenu onClick={dropHandler} />}
          <div className={twMerge('my-5 mx-auto py-0 px-10 flex justify-between max-[1140px]:flex-col max-[1140px]:justify-start', isProfile && 'flex max-[1140px]:flex-row max-[1140px]:justify-between')}>
            {!drop_ && (
              <Link to="/" className={twMerge(isProfile && "max-[1140px]:translate-x-14")}>
                <div className="text-[#232426] font-bold text-2xl rounded-full mt-2 flex justify-center items-center max-[1140px]:justify-start
                   max-[1140px]:scale-90 max-[1140px]:-translate-x-[50px]
                   max-[600px]:hidden"
                   style={{fontFamily: "Comfortaa", letterSpacing: '2px'}}
                   >
                  <img className="mr-4 w-12"
                   src={logo} alt="creatiqa" />
                  CREATIQA
                </div>{" "}
              </Link>
            )}
            <Navigation />
            {isLogin ? (
              <ul className={twMerge(`max-[1140px]:hidden flex items-center`, isProfile && "!flex")}>
                <button className="mr-6 w-52 h-11 bg-[#784adc]
                 text-white text-lg font-normal border-none
                  outline-none cursor-pointer rounded-xl" 
                  onClick={handleEditor}>Создать проект</button>
                <Link to="/profile">
                  <img width="50" src={test} alt="photo" />
                </Link>
              </ul> 
            ) : (
              <ul className={twMerge(`flex max-[1140px]:flex-col max-[1140px]:p-0 max-[1140px]:mt-[30vh]` ,!drop && "max-[1140px]:hidden")}>
                <li onClick={showLoginHandle} 
                className="m-[25px 0 0 55px] list-none font-normal rounded-xl h-min  mr-4 py-3.5 px-8
                max-[1140px]:block  max-[1140px]:p-4 max-[1140px]:m-0 max-[1140px]:text-center max-[1140px]:bg-[#784ADC]
                ">
                  {" "}
                  <NavLink className='text-[#232426] max-[1140px]:text-white max-[1140px]:font-medium align-middle' to="/">Войти</NavLink>
                </li>
                <li
                  onClick={showRegistrationHandle}
                  className="h-min 
                   bg-[#f2f2f2] duration-75 py-3.5 px-11 cursor-pointer m-[10px 0 0 55px] rounded-xl list-none  font-normal hover:bg-[#d9d9d9]
                   max-[1140px]:block max-[1140px]:p-4  max-[1140px]:mt-3 max-[1140px]:text-center max-[1140px]:font-medium max-[1140px]:m-0
                   "
                >
                  <NavLink className="text-[#232426] align-middle" to="/">Зарегистрироваться</NavLink>
                </li>
              </ul>
            )}
          </div>
          <div
            className={twMerge(popup.register && "fixed top-0 bg-[#000000]/70 backdrop-opacity-30 z-50 w-screen h-screen flex justify-center items-center", popup.auth && "fixed top-0 bg-[#000000]/70 z-50 w-screen h-screen flex justify-center items-center", !drop && "max-[1140px]:hidden")}
          >
            <Registration
              popup={[popup, setPopup]}
              handlers={[closeHandle, showLoginHandle]}
            />
            <Auth
              popup={[popup, setPopup]}
              handlers={[closeHandle, showRegistrationHandle]}
            />
          </div>
        </div>
      )}
    </>
  );
};
