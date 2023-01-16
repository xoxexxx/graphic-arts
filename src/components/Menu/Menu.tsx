import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/images/Logo.svg';
import close from '../../assets/images/close.svg'
import './Menu.less'
import { Navigation } from "./Navigation";
export const Menu: React.FC = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    console.log(isLogin)
    const [popup, setPopup] = useState({register: false, auth: false})
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
                <li className="item"> <NavLink to='/'>Выход</NavLink></li>
            </ul>
            : 
            <ul className="menu__box_items">  
                <li onClick={showLoginHandle} className="item_auth"> <NavLink to='/'>Войти</NavLink></li>
                <li onClick={showRegistrationHandle} className="item_registration"><NavLink to='/'>Зарегистрироваться</NavLink></li>
            </ul>}
            </div>
            <div className={`${popup.register && 'popup' || popup.auth && 'popup'}`}>
                {popup.register &&
                 <div className="popup__registration">
                 <form action="registration" className="popup__registration_form">
                     <label htmlFor="title" className="title">Регистрация</label>
                     <button onClick={closeHandle} className="x"><img src={`${close}`} alt="login-creatiqa" /></button>
                     <fieldset>
                         <label htmlFor="name">Имя 
                         <input type="text" placeholder="Введите ваше имя" />
                         </label>
                         <label htmlFor="email">E-mail 
                         <input type="email" placeholder="Введите адрес электронной почты" />
                         </label>
                         <label htmlFor="password">Пароль
                         <input type="password" placeholder="Придумайте пароль" />
                         </label>
                         <p className="license">Продолжая, вы соглашаетесь с <a href="#">Условиями использования</a> и <a href="#">Политикой конфиденциальности.</a></p>
                         <button className="popup__registration_submit">Зарегистрироваться</button>
                         <p className="link-login">У вас есть аккаунт? <Link onClick={showLoginHandle} to='/'>Войти</Link></p>
                     </fieldset>
                 </form>
             </div>
                }
               {popup.auth &&   
               <div className="popup__authorization">
                 <form action="authorization" className="popup__authorization_form">
                     <label htmlFor="title" className="title">Вход</label>
                     <button onClick={closeHandle} className="x2"><img src={`${close}`} alt="login-creatiqa" /></button>
                     <fieldset>
                         <label htmlFor="email">E-mail 
                         <input type="email" placeholder="Введите адрес электронной почты" />
                         </label>
                         <label htmlFor="password">Пароль
                         <input type="password" placeholder="Придумайте пароль" />
                         </label>
                         <button className="popup__authorization_submit">Войти</button>
                         <p className="link-login">Нет аккаунт? <Link onClick={showRegistrationHandle} to='/'>Зарегистрироваться</Link></p>
                     </fieldset>
                 </form>
             </div>}
            </div>
        </div>
    )
}