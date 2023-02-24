import React from "react";

const photo = require('../../assets/images/test.png')
const arrow = require('../../assets/images/right-arrow.svg')

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const ProfileNavigation: React.FC = () => {
    const drop = useSelector((state: boolean | any) => state.dropReducer.drop)
    const dispatch = useDispatch()
    const handler = () => {
        dispatch({type: "DROP", payload: false})
    }
    return(
        <div className="flex justify-between mt-8 min-[1140px]:hidden">
        <div className="flex">
            <img width='79' src={photo} alt="creatiqa-profile" />
            <div className="info flex flex-col ml-5">
                <span className="text-[#7B7C7D] text-base mt-2.5">Имя Фамилия</span>
                <span className="text-[#7B7C7D] text-base mt-2.5">mail@gmail.com</span>
            </div>
        </div>
    <Link className="flex items-center" onClick={handler} to='/profile'><img src={arrow} alt="creatiqa" /></Link>
</div>
    )
}