import React from "react";
import { Link } from "react-router-dom";
const arrow = require("../../assets/images/left-arrow.svg");
const pencel = require("../../assets/images/pencel.svg");
const premium = require("../../assets/images/menu-vector4.svg");
const upload = require("../../assets/images/upload.svg");
const test = require("../../assets/images/test.png")

export const EMenu:React.FC = () => {

    return(
        <div className="e-menu flex justify-between border-b border-[#dcdcdc] border-solid mx-auto py-5 px-10 ">
            <div className="e-menu__box-left flex items-center">
                <ul className="flex items-center m-0 p-0 ">
                    <li className="flex items-center justify-center cursor-pointer list-none p-0 mr-5"> <Link className="text-black" to='/home'><img className="inline" src={arrow} style={{margin: '0 10px 0 0'}} alt="creatiqa_main"/> Главная</Link></li>
                    <li className="flex items-center justify-center cursor-pointer list-none p-0 mr-5">Файл</li>
                    <li className="flex items-center justify-center cursor-pointer list-none p-0">Размер</li>
                </ul>
            </div>
            <div className="e-menu__box-right flex items-center">
                <ul className="flex items-center m-0 p-0 ">
                    <li className="flex items-center justify-center cursor-pointer list-none my-0 mx-1 roundex-xl mr-5">Название проекта <img style={{margin: '0 0 0 10px'}} src={pencel} alt="creatiqa_editor"/></li>
                    <li className="flex items-center justify-center cursor-pointer list-none my-0 mx-1 roundex-xl mr-5"><img style={{margin: '0 10px 0 0'}} src={premium} alt="creatiqa_premium"/>Creatiqa Premium</li>
                    <li className="flex items-center justify-center cursor-pointer mr-6 w-52 h-11 bg-[#784adc] text-white text-lg font-normal border-none rounded-xl">Скачать проект <img style={{margin: '0 0 0 10px'}} src={upload} alt="upload"/></li>
                    <li className="flex items-center justify-center cursor-pointer list-none m-0 roundex-xl"><img   width='47' src={test} alt="profile_creatiqa" /></li>
                </ul>
            </div>
        </div>
    )
}