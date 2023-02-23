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
        <div className="menu__box_navigation_profile flex justify-between mt-8 min-[1140px]:hidden">
        <div className="menu__box_navigation_profile-info flex">
            <img width='79' src={photo} alt="creatiqa-profile" />
            <div className="info flex flex-col ml-5">
                <span className="text-[#7B7C7D] text-base mt-2.5">Имя Фамилия</span>
                <span className="text-[#7B7C7D] text-base mt-2.5">mail@gmail.com</span>
            </div>
        </div>
    <Link className="mx-auto" onClick={handler} to='/profile'><img src={arrow} alt="creatiqa" /></Link>
</div>
    )
}