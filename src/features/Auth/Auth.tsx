import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import closeSVG from '../../assets/images/close.svg'
import { IPopup } from '../Menu/types';
export const Auth: React.FC<{popup: IPopup | any, handlers: any }> = ({popup, handlers}) => {
    const dispatch = useDispatch()
    const [usr, setUsr] = useState<any>({
        email: "",
        password: ""
      })
    const close = handlers?.[0]
    const showRegistration = handlers?.[1]
    const navigate = useNavigate()
      const submit = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch({type: "FETCH_AUTH_REQUEST"})
        popup[1](false)
        return navigate('/home')
//         axios({
// //             method: 'POST',
// //             url: 'http://217.25.88.184:8080/authusers/',
// //             data: usr,

//             method: 'PUT',
//             url: 'http://217.25.88.184:8080/api-authlogin/?next=/auth',
//             data: usr,
//             xsrfCookieName: "XSRF-TOKEN",
//             xsrfHeaderName: "X-CSRFToken",
//             headers: {
//               'Content-Type': 'application/json',
//             }

//         }).then(res => {
//             dispatch({type: "FETCH_AUTH_REQUEST"})
            
//         }).catch(() => dispatch({type: "FETCH_AUTH_ERROR"}))
      }


    return(
        <>
         {popup[0].auth &&   
               <div className="popup__authorization">
                
                 <form action="http://217.25.88.184:8080/api-authlogin/?next=/auth" className="popup__authorization_form">
                <input type="hidden" name='_csrf' value='SKUDASCSRF' />
                     <label htmlFor="title" className="title">Вход</label>
                     <button onClick={close} className="x2"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
                     <fieldset>
                         <label htmlFor="email">E-mail 
                         <input onChange={e => setUsr({...usr, email: e.target.value})} type="email" placeholder="Введите адрес электронной почты" />
                         </label>
                         <label htmlFor="password">Пароль
                         <input onChange={e => setUsr({...usr, password: e.target.value})} type="password" placeholder="Придумайте пароль" />
                         </label>
                         <button onClick={submit} className="popup__authorization_submit">Войти</button>
                         <p className="link-login">Нет аккаунт? <Link onClick={showRegistration} to='/'>Зарегистрироваться</Link></p>
                     </fieldset>
                 </form>
             </div>}
        </>
    )
}