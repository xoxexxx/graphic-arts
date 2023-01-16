import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.less'
export const Navigation: React.FC = () => {

    return(
        <ul className="menu__box_navigation">
            <li><NavLink to='/#' >Главная</NavLink></li>
            <li><NavLink to='/#' >Шаблоны</NavLink></li>
            <li><NavLink to='/#' >Обучение</NavLink></li>
            <li><NavLink to='/#' >Тарифы</NavLink></li>
        </ul>
    )
}