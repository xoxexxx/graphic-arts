import React, { SetStateAction, useState } from 'react';
import closeSVG from '../../assets/images/close.svg'
import { Link } from 'react-router-dom';
import {IPopup }from '../../components/Menu/types'
import {IUserData }from '../../components/Menu/types'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {Verify} from './Verify'
export const Registration: React.FC<{popup: IPopup | any, handlers: any}> = ({popup, handlers}) => {
    const dispatch = useDispatch()
    const [verify, setVerify] = useState(true)
    const [reg, setReg] = React.useState<Partial<IUserData>>({
        email: 'fupi018@gmail.com',
        password: null,
        password2: null,
        phone: null,
        first_name: null
      })
    const {email} = reg
    const close = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        document.title = `Creatiqa`
        popup[1]({register: false, auth: false})
        setVerify(false)
    }
    const showLogin = handlers?.[1]

    const submit = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://217.25.88.184:8080/registr',
            data: reg
        }).then(res => {
            dispatch({type: "FETCH_AUTH_REQUEST"})
            setVerify(prev => !prev)
        }).catch(() => dispatch({type: "FETCH_AUTH_ERROR"}))
    }
    return(
        <>
        {popup[0].register &&
                 <div className="popup__registration">
                    {verify 
                    ? <Verify email={email} close={close} />
                    : <form action="registration" className="popup__registration_form">
                    <label htmlFor="title" className="title">Регистрация</label>
                    <button onClick={close} className="x"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
                    <fieldset>
                        <label htmlFor="name">Имя 
                            <input type="text" value={reg.first_name || ''} onChange={(e) => setReg({...reg, first_name: e.target.value})} placeholder="Введите ваше имя" />
                        </label>
                        <label htmlFor="email">E-mail 
                            <input type="email" value={reg.email || ''} onChange={(e) => setReg({...reg, email: e.target.value})} placeholder="Введите адрес электронной почты" />
                        </label>
                        <label htmlFor="tel">Телефон 
                            <input type="tel" value={reg.phone || ''} onChange={(e) => setReg({...reg, phone: e.target.value})} placeholder="Введите номер телефона" />
                        </label>
                        <label htmlFor="password">Пароль
                           <input value={reg.password || ''} onChange={(e) => setReg({...reg, password: e.target.value})} type="password" placeholder="Придумайте пароль" />
                        </label>
                        <label htmlFor="password">Подтвердите пароль
                           <input value={reg.password2 || ''} onChange={(e) => setReg({...reg, password2: e.target.value})} type="password" placeholder="Подтвердите пароль" />
                        </label>
                        <p className="license">Продолжая, вы соглашаетесь с <a href="#">Условиями использования</a> и <a href="#">Политикой конфиденциальности.</a></p>
                        <button onClick={submit} className="popup__registration_submit">Зарегистрироваться</button>
                        <p className="link-login">У вас есть аккаунт? <Link onClick={showLogin} to='/'>Войти</Link></p>
                    </fieldset>
                </form>}
                 
             </div>
                }
        </>
    )
}