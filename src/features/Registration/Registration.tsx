import React, { SetStateAction, useState } from 'react';
import closeSVG from '../../assets/images/close.svg'
import { Link } from 'react-router-dom';
import {IPopup }from '../../components/Menu/types'
import {IUserData }from '../../components/Menu/types'
export const Registration: React.FC<{popup: IPopup | any, handlers: any}> = ({popup, handlers}) => {

    const [reg, setReg] = React.useState<Partial<IUserData>>({
        email: null,
        password: null,
        password2: null,
        phone: null,
        first_name: null
      })
      const close = handlers?.[0]
    const showLogin = handlers?.[1]

    const submit = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
    }
    return(
        <>
        {popup[0].register &&
                 <div className="popup__registration">
                 <form action="registration" className="popup__registration_form">
                     <label htmlFor="title" className="title">Регистрация</label>
                     <button onClick={close} className="x"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
                     <fieldset>
                         <label htmlFor="name">Имя 
                             <input type="text" value={reg.first_name || ''} onChange={(e) => setReg({...reg, first_name: e.target.value})} placeholder="Введите ваше имя" />
                         </label>
                         <label htmlFor="email">E-mail 
                             <input type="email" value={reg.email || ''} onChange={(e) => setReg({...reg, email: e.target.value})} placeholder="Введите адрес электронной почты" />
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
                 </form>
             </div>
                }
        </>
    )
}