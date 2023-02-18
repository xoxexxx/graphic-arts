import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ProfileNavigation } from "../profile-navigation/ProfileNavigation";
import { JoinNavigation } from "./JoinNavigation";

export const Navigation: React.FC = () => {
    const dispatch = useDispatch()
    const drop = useSelector((state: any) => state.dropReducer.drop)
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)

    const hidden = () => {
        dispatch({type: "DROP", payload: false})
    }

    return(
        <>
        <ul className={`menu__box_navigation ${!drop && "mob__hidden"} `}>
            {!isProfile && isLogin && <ProfileNavigation />}
            <li onClick={hidden}><NavLink to='/' >Главная</NavLink></li>
            <li onClick={hidden}><NavLink to='/templates' >Шаблоны</NavLink></li>
            <li onClick={hidden}><NavLink to='/education' >Обучение</NavLink></li>
            <li onClick={hidden}><NavLink to='/prices' >Тарифы</NavLink></li>
        </ul>
        <div className={`menu__box_navigation-join ${drop && `block`}`}>
         <JoinNavigation />
        </div>
        
       
        </>
    )
}