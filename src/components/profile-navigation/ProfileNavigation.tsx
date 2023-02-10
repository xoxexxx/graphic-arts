import React from "react";
import photo from '../../assets/images/test.png'
import arrow from '../../assets/images/right-arrow.svg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const ProfileNavigation: React.FC = () => {
    const drop = useSelector((state: boolean | any) => state.dropReducer.drop)
    const dispatch = useDispatch()
    const handler = () => {
        dispatch({type: "DROP", payload: false})
    }
    return(
        <div className="menu__box_navigation_profile">
                <div className="menu__box_navigation_profile-info">
                    <img width='79' src={photo} alt="creatiqa-profile" />
                    <div className="info">
                        <span>Имя Фамилия</span>
                        <span>mail@gmail.com</span>
                    </div>
                </div>
            <Link onClick={handler} to='/profile'><img src={arrow} alt="creatiqa" /></Link>
        </div>
    )
}