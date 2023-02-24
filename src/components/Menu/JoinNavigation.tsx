import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const i1 = require("../../assets/images/menu-vector1.svg");
const i2 = require("../../assets/images/menu-vector2.svg");
const i3 = require("../../assets/images/menu-vector3.svg");
const i4 = require("../../assets/images/menu-vector4.svg");
const logo = require("../../assets/images/Web-logo.svg");

import { twMerge } from "tailwind-merge";

export const JoinNavigation: React.FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_)
    const drop = useSelector((state: boolean | any) => state.dropReducer.drop)
    const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const hidden = () => {
        dispatch({type: "DROP_", payload: false})
    }
    return(
        <div className={twMerge( `min-w-[280px] max-[1140px]:hidden flex flex-col`, !isLogin && `hidden` || drop_ && 'd-trsfm' || drop && `!block`) }>
            <ul className="m-0 pl-5">
                {drop_ && <img src={logo} alt="creatiqa_menu" className="logo_" onClick={hidden}  /> }
                <li className="w-52 n-j-list" onClick={hidden}> <NavLink className="rounded-xl w-56 text-black block mt-2.5 py-2 px-6 duration-300" to="/home"><img className="-translate-x-2 -translate-y-0.5  inline" src={i1} alt="creatiqa_menu" /> Главная</NavLink> </li>
                <li className="w-52 n-j-list" onClick={hidden}> <NavLink className="rounded-xl w-56 text-black block mt-2.5 py-2 px-6 duration-300" to="/templates"><img className="-translate-x-2 -translate-y-0.5 inline" src={i2} alt="creatiqa_menu" /> Шаблоны</NavLink> </li>
                <li className="w-52 n-j-list" onClick={hidden}> <NavLink className="rounded-xl w-56 text-black block mt-2.5 py-2 px-6 duration-300" to="/projects"> <img className="-translate-x-2 -translate-y-0.5 inline" src={i3} alt="creatiqa_menu" /> Проекты</NavLink></li>
                <li className={twMerge(drop && 'hidden', 'w-52')} onClick={hidden}> <NavLink  className="bg-[#F3F3F3] rounded-xl w-56 duration-300 text-black block mt-2.5 py-2 px-4" to="/premium"> <img className="mr-2.5  -translate-y-0.5  inline" src={i4} alt="creatiqa_menu" /> Creatiqa Premium</NavLink></li>
            </ul>
            <div className={twMerge('flex flex-col', !drop && `hidden`,)}>
                <button className="rounded-xl corsor-pointer border-none outline-none  py-4 px-0 mt-28"> <img className="-translate-x-2 inline" src={i4} alt="creatiqa-premium" />Creatiqa Premium </button>
                <button className="rounded-xl corsor-pointer border-none outline-none  py-4 px-0  mt-2.5  bg-[#784ADC] text-white">Создать проект</button>
            </div>
        </div>
    )
}