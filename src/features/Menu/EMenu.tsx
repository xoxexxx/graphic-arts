import React from "react";
import { Link } from "react-router-dom";
const arrow = require("../../assets/images/left-arrow.svg");
const pencel = require("../../assets/images/pencel.svg");
const premium = require("../../assets/images/menu-vector4.svg");
const upload = require("../../assets/images/upload.svg");
const test = require("../../assets/images/test.png")
import './Menu.less'
export const EMenu:React.FC = () => {

    return(
        <div className="e-menu">
            <div className="e-menu__box-left">
                <ul>
                    <li> <Link to='/home'><img src={arrow} style={{margin: '0 10px 0 0', transform: 'translate(0, 5px)'}} alt="creatiqa_main"/> Главная</Link></li>
                    <li>Файл</li>
                    <li>Размер</li>
                </ul>
            </div>
            <div className="e-menu__box-right">
                <ul>
                    <li>Название проекта <img style={{margin: '0 0 0 10px'}} src={pencel} alt="creatiqa_editor"/></li>
                    <li><img style={{margin: '0 10px 0 0'}} src={premium} alt="creatiqa_premium"/>Creatiqa Premium</li>
                    <li className="upload-btn">Скачать проект <img style={{margin: '0 0 0 10px'}} src={upload} alt="upload"/></li>
                    <li><img   width='47' src={test} alt="profile_creatiqa" /></li>
                </ul>
            </div>
        </div>
    )
}