import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Menu.less';
import { useDispatch, useSelector } from "react-redux";
import { ProfileNavigation } from "../profile-navigation/ProfileNavigation";
export const Navigation: React.FC = () => {
    const dispatch = useDispatch()
    const drop = useSelector((state: any) => state.dropReducer.drop)
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const [profile, setProfile] = useState(false)
    const location = useLocation()


    
    useEffect(() => {
        location.pathname == '/profile' ? setProfile(false) : setProfile(true)
    }, [location])

    const hidden = () => {
        dispatch({type: "DROP", payload: false})
    }

    return(
        <ul className={`menu__box_navigation ${!drop && "mob__hidden"} `}>
            {profile && isLogin && <ProfileNavigation />}
            <li onClick={hidden}><NavLink to='/' >Главная</NavLink></li>
            <li onClick={hidden}><NavLink to='/templates' >Шаблоны</NavLink></li>
            <li onClick={hidden}><NavLink to='/education' >Обучение</NavLink></li>
            <li onClick={hidden}><NavLink to='/prices' >Тарифы</NavLink></li>
        </ul>
    )
}