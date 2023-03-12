import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { dropMenu } from "../../services/reducers/dropReducer";

const photo = require('../../assets/images/test.png')
const arrow = require('../../assets/images/right-arrow.svg')

export const ProfileNavigation: React.FC = () => {
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(dropMenu(false))
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