import React from "react";
import { NavLink } from "react-router-dom";
import i1 from '../../assets/images/menu-vector1.svg'
import i2 from '../../assets/images/menu-vector2.svg'
import i3 from '../../assets/images/menu-vector3.svg'
import i4 from '../../assets/images/menu-vector4.svg'

export const JoinNavigation = () => {

    return(
        <div className="menu__join_navigation">
            <ul>
                <li> <NavLink to="/home"><img src={`${i1}`} alt="creatiqa_menu" /> Главная</NavLink> </li>
                <li> <NavLink to="/shablon"><img src={`${i2}`} alt="creatiqa_menu" /> Шаблоны</NavLink> </li>
                <li> <NavLink to="/project"> <img src={`${i3}`} alt="creatiqa_menu" /> Проекты</NavLink></li>
                <li> <NavLink className="premium" to="/premium"> <img src={`${i4}`} alt="creatiqa_menu" /> Creatiqa Premium</NavLink></li>
            </ul>
        </div>
    )
}