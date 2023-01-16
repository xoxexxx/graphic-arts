import React from 'react';
import { Link } from 'react-router-dom';
import closeSVG from '../../assets/images/close.svg'
import { IPopup } from '../../components/Menu/types';
export const Auth: React.FC<{popup: IPopup | any, handlers: any }> = ({popup, handlers}) => {

    const close = handlers?.[0]
    const showRegistration = handlers?.[1]

    return(
        <>
         {popup[0].auth &&   
               <div className="popup__authorization">
                 <form action="authorization" className="popup__authorization_form">
                     <label htmlFor="title" className="title">Вход</label>
                     <button onClick={close} className="x2"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
                     <fieldset>
                         <label htmlFor="email">E-mail 
                         <input type="email" placeholder="Введите адрес электронной почты" />
                         </label>
                         <label htmlFor="password">Пароль
                         <input type="password" placeholder="Придумайте пароль" />
                         </label>
                         <button className="popup__authorization_submit">Войти</button>
                         <p className="link-login">Нет аккаунт? <Link onClick={showRegistration} to='/'>Зарегистрироваться</Link></p>
                     </fieldset>
                 </form>
             </div>}
        </>
    )
}