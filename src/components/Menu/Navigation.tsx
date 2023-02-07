import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.less';
import { useSelector } from "react-redux";
export const Navigation: React.FC = () => {

    const drop = useSelector((state: any) => state.dropReducer.drop)


    return(
        <ul className={`menu__box_navigation ${!drop && "mob__hidden"} `}>
            <li><NavLink to='/#' >Главная</NavLink></li>
            <li><NavLink to='/#' >Шаблоны</NavLink></li>
            <li><NavLink to='/#' >Обучение</NavLink></li>
            <li><NavLink to='/#' >Тарифы</NavLink></li>
        </ul>
    )
}