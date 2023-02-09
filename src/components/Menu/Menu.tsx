import React, {  useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/images/Logo.svg';
import './Menu.less'
import { Navigation } from "./Navigation";
import {Registration} from '../../features/Registration/Registration'
import {Auth} from '../../features/Auth/Auth'
import { IPopup } from "./types";
import { DropMenu } from "../drop-menu/drop-menu";
import { JoinNavigation } from "./JoinNavigation";
import test from '../../assets/images/test.png'

export const Menu: React.FC = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)
    const drop = useSelector((state: boolean | any )=> state.dropReducer.drop)
    const drop_ = useSelector((state: boolean | any )=> state.dropReducer.drop_)
    const location = useLocation()
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
    const dropHandler = () => {
        dispatch({type: "DROP", payload: !drop})
    }
    useEffect(() => {
        location.pathname == '/profile' ? dispatch({type: "IS_PROFILE", payload: true}) : dispatch({type: "IS_PROFILE", payload: false})
    }, [location])


    return(
        <div className="menu">
            {drop_ && <div className={"drop_profile_menu"}>
                <div className="drop_profile_menu_nav">
                    <JoinNavigation />
                </div>
            </div>}
           {!isProfile && <DropMenu onClick={dropHandler} />} 
            <div className={`menu__box ${isProfile && 'flex'}`}>
                <Link to='/' className={`${isProfile && 'isProfileLogo'}`}> {!drop_ && <div className="menu__box_logo"><img src={`${logo}`} alt="creatiqa" />CREATIQA</div>}  </Link>
                <Navigation />
            {isLogin ? 
            <ul className={`menu__box_items-join ${isProfile && "show"}`}>
                <button>Создать проект</button>
               <Link to="/profile"><img width='50' src={`${test}`} alt="photo" /></Link> 
                
            </ul>
            : 
            <ul className={`menu__box_items  ${!drop && "mob__hidden"} `}>  
                <li onClick={showLoginHandle} className="item_auth"> <NavLink to='/'>Войти</NavLink></li>
                <li onClick={showRegistrationHandle} className="item_registration"><NavLink to='/'>Зарегистрироваться</NavLink></li>
            </ul>}
            </div>
            <div className={`${popup.register && 'popup' || popup.auth && 'popup'}  ${!drop && "mob__hidden"} ` }>
                <Registration popup={[popup, setPopup]}  handlers={[closeHandle,showLoginHandle]} />
                <Auth popup={[popup, setPopup]} handlers={[closeHandle,showRegistrationHandle]} />
            </div>
            
        </div>
    )
}