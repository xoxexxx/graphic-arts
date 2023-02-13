import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import i1 from '../../assets/images/menu-vector1.svg'
import i2 from '../../assets/images/menu-vector2.svg'
import i3 from '../../assets/images/menu-vector3.svg'
import i4 from '../../assets/images/menu-vector4.svg'
import logo from "../../assets/images/Web-logo.svg";

export const JoinNavigation: React.FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_)
    const drop = useSelector((state: boolean | any) => state.dropReducer.drop)
    const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)
    const hidden = () => {
        dispatch({type: "DROP_", payload: false})
    }
    console.log(isProfile)
    return(
        <div className={`${drop_ && 'd-trsfm' || drop && `block`} menu__join_navigation` }>
            <ul>
                {drop_ && <img src={`${logo}`} alt="creatiqa_menu" className="logo_" onClick={hidden}  /> }
                <li onClick={hidden}> <NavLink to="/home"><img src={`${i1}`} alt="creatiqa_menu" /> Главная</NavLink> </li>
                <li onClick={hidden}> <NavLink to="/templates"><img src={`${i2}`} alt="creatiqa_menu" /> Шаблоны</NavLink> </li>
                <li onClick={hidden}> <NavLink to="/projects"> <img src={`${i3}`} alt="creatiqa_menu" /> Проекты</NavLink></li>
                <li className={`${drop && `hidden`}`} onClick={hidden}> <NavLink className="premium" to="/premium"> <img src={`${i4}`} alt="creatiqa_menu" /> Creatiqa Premium</NavLink></li>
            </ul>
            <div className={`${isProfile && `hidden` || !drop && `hidden`} menu__join_navigation-btns`}>
                <button> <img src={i4} alt="creatiqa-premium" />Creatiqa Premium </button>
                <button>Создать проект</button>
            </div>
        </div>
    )
}