import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ProfileNavigation } from "../profile-navigation/ProfileNavigation";
import { JoinNavigation } from "./JoinNavigation";

import { twMerge } from "tailwind-merge";

export const Navigation: React.FC = () => {
    const dispatch = useDispatch()
    const drop = useSelector((state: any) => state.dropReducer.drop)
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)

    const hidden = () => {
        dispatch({type: "DROP_MENU", payload: false})
    }

    return(
        <>
        <ul className={twMerge(`text-lg flex mt-4 mr-5 mb-0 ml-1 p-0 max-[1140px]:flex-col max-[1140px]:pb-6 max-[1140px]:border-b max-[1140px]:border-[#D9D9D9] max-[1140px]:border-solid` ,!drop && "max-[1140px]:hidden" )}>
            {!isProfile && isLogin && <ProfileNavigation />}
            <li className={"mr-10  max-[1140px]:max-w-[160px] max-[1140px]:mt-7"} onClick={hidden}><NavLink className={({isActive}) => twMerge(isActive && 'text-[#784ADC]')} to='/' >Главная</NavLink></li>
            <li className={"mr-10  max-[1140px]:max-w-[160px] max-[1140px]:mt-7"} onClick={hidden}><NavLink className={({isActive}) => twMerge(isActive && 'text-[#784ADC]')} to='/templates' >Шаблоны</NavLink></li>
            <li className={"mr-10  max-[1140px]:max-w-[160px] max-[1140px]:mt-7"} onClick={hidden}><NavLink className={({isActive}) => twMerge(isActive && 'text-[#784ADC]')} to='/education' >Обучение</NavLink></li>
            <li className={"mr-10  max-[1140px]:max-w-[160px] max-[1140px]:mt-7"} onClick={hidden}><NavLink className={({isActive}) => twMerge(isActive && 'text-[#784ADC]')} to='/prices' >Тарифы</NavLink></li>
        </ul>
        <div className={twMerge(`hidden`, drop && `block`)}>
         <JoinNavigation />
        </div>
        
       
        </>
    )
}