import React from "react";
import { Link } from "react-router-dom";
const arrow = require("../../assets/images/left-arrow.svg");
const pencel = require("../../assets/images/pencel.svg");
const premium = require("../../assets/images/menu-vector4.svg");
const upload = require("../../assets/images/upload.svg");
const test = require("../../assets/images/test.png")

export const EMenu:React.FC = () => {

    return(
        <div className="e-menu flex justify-between border border-[#dcdcdc] border-solid">
            <div className="e-menu__box-left flex items-center">
                <ul className="flex items-center m-0 p-0 ">
                    <li className="flex items-center justify-center cursor-pointer list-none p-0 my-10 mt-10 mb-0"> <Link className="text-black" to='/home'><img className="inline" src={arrow} style={{margin: '0 10px 0 0'}} alt="creatiqa_main"/> Главная</Link></li>
                    <li className="flex items-center justify-center cursor-pointer list-none p-0 my-10 mt-10 mb-0">Файл</li>
                    <li className="flex items-center justify-center cursor-pointer list-none p-0 my-10 mt-10 mb-0">Размер</li>
                </ul>
            </div>
            <div className="e-menu__box-right flex items-center">
                <ul className="flex items-center m-0 p-0 ">
                    <li className="flex items-center justify-center cursor-pointer list-none my-0 mx-1 roundex-xl">Название проекта <img style={{margin: '0 0 0 10px'}} src={pencel} alt="creatiqa_editor"/></li>
                    <li className="flex items-center justify-center cursor-pointer list-none my-0 mx-1 roundex-xl"><img style={{margin: '0 10px 0 0'}} src={premium} alt="creatiqa_premium"/>Creatiqa Premium</li>
                    <li className="flex items-center justify-center cursor-pointer list-none my-0 mx-1 roundex-xl text-white bg-[#784ADC]">Скачать проект <img style={{margin: '0 0 0 10px'}} src={upload} alt="upload"/></li>
                    <li className="flex items-center justify-center cursor-pointer list-none m-0 roundex-xl"><img   width='47' src={test} alt="profile_creatiqa" /></li>
                </ul>
            </div>
        </div>
    )
}