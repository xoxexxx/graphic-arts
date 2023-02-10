import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.less';
import { useDispatch, useSelector } from "react-redux";
export const Navigation: React.FC = () => {
    const dispatch = useDispatch()
    const drop = useSelector((state: any) => state.dropReducer.drop)
    const hidden = () => {
        dispatch({type: "DROP", payload: false})
    }

    return(
        <ul className={`menu__box_navigation ${!drop && "mob__hidden"} `}>
            <li onClick={hidden}><NavLink to='/' >Главная</NavLink></li>
            <li onClick={hidden}><NavLink to='/templates' >Шаблоны</NavLink></li>
            <li onClick={hidden}><NavLink to='/education' >Обучение</NavLink></li>
            <li onClick={hidden}><NavLink to='/prices' >Тарифы</NavLink></li>
        </ul>
    )
}