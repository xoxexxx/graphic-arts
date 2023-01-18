import React, {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/images/Logo.svg';
import close from '../../assets/images/close.svg'
import './Menu.less'
import { Navigation } from "./Navigation";
import {Registration} from '../../features/Registration/Registration'
import {Auth} from '../../features/Auth/Auth'
import axios from "axios";

import { IPopup } from "./types";


export const Menu: React.FC = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)

    const [reg, setReg] = useState<any>({
        email: null,
        password: null,
        password2: null,
        phone: '+799999999',
        first_name: null
      })
    const [popup, setPopup] = useState<IPopup>({register: false, auth: false})

    const showRegistrationHandle = () => {
        document.title = `Creatiqa Регистрация`
        setPopup({register: true, auth: false})
    }
    const closeHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        document.title = `Creatiqa`
        setPopup({register: false, auth: false})
    }
    const showLoginHandle = () => {
        document.title = `Creatiqa Вход`
        setPopup({register: false, auth: true})
    }
    
    return(
        <div className="menu">
            <div className="menu__box">
                <Link to='/'><div className="menu__box_logo"><img src={`${logo}`} alt="creatiqa" />CREATIQA</div></Link>
                <Navigation />
            {isLogin ? 
            <ul className="menu__box_items">
                {/* <li className="item"> <NavLink to='/'>Выход</NavLink></li> */}
            </ul>
            : 
            <ul className="menu__box_items">  
                <li onClick={showLoginHandle} className="item_auth"> <NavLink to='/'>Войти</NavLink></li>
                <li onClick={showRegistrationHandle} className="item_registration"><NavLink to='/'>Зарегистрироваться</NavLink></li>
            </ul>}
            </div>
            <div className={`${popup.register && 'popup' || popup.auth && 'popup'}`}>
                <Registration popup={[popup, setPopup]}  handlers={[closeHandle,showLoginHandle]} />
                <Auth popup={[popup, setPopup]} handlers={[closeHandle,showRegistrationHandle]} />
            </div>
        </div>
    )
}