import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import i1 from '../../assets/images/menu-vector1.svg'
import i2 from '../../assets/images/menu-vector2.svg'
import i3 from '../../assets/images/menu-vector3.svg'
import i4 from '../../assets/images/menu-vector4.svg'

export const JoinNavigation: React.FC = () => {
    const dispatch = useDispatch()
    const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_)

    const hidden = () => {
        dispatch({type: "DROP_", payload: false})
    }

    return(
        <div className={`${drop_ && 'd-trsfm'} menu__join_navigation` }>
            <ul>
                <li onClick={hidden}> <NavLink to="/home"><img src={`${i1}`} alt="creatiqa_menu" /> Главная</NavLink> </li>
                <li onClick={hidden}> <NavLink to="/templates"><img src={`${i2}`} alt="creatiqa_menu" /> Шаблоны</NavLink> </li>
                <li onClick={hidden}> <NavLink to="/projects"> <img src={`${i3}`} alt="creatiqa_menu" /> Проекты</NavLink></li>
                <li onClick={hidden}> <NavLink className="premium" to="/premium"> <img src={`${i4}`} alt="creatiqa_menu" /> Creatiqa Premium</NavLink></li>
            </ul>
        </div>
    )
}