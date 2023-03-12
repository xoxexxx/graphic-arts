import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {IPopup }from '../Menu/types'
import {IUserData }from '../Menu/types'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {Verify} from './Verify'
const closeSVG = require('../../assets/images/close.svg')

export const Registration: React.FC<{popup: IPopup | any, handlers: any}> = ({popup, handlers}) => {
    const dispatch = useDispatch()
    const [verify, setVerify] = useState(false)
    const [reg, setReg] = React.useState<Partial<IUserData>>({
        email: null,
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
                 <div className="overflow-y-scroll  max-h-[90%] rounded-xl bg-[white] w-[480px]">
                    {verify 
                    ? <Verify email={email} login={showLogin} set={setVerify}  />
                    : <form action="registration" className="w-80 my-5 mx-auto ">
                    <label htmlFor="title" className="title inline-block text-xl mt-2.5">Регистрация</label>
                    <button className="x absolute outline-none border-none bg-transparent cursor-pointer translate-x-[220px] translate-y-[10px]" onClick={close}><img src={closeSVG} alt="login-creatiqa" /></button>
                    <fieldset className='flex flex-col p-0 m-0'>
                        <label className='flex flex-col mt-4' htmlFor="name">Имя 
                            <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" type="text" 
                            value={reg.first_name || ''} 
                            onChange={(e) => setReg({...reg, first_name: e.target.value})} placeholder="Введите ваше имя" />
                        </label>
                        <label className='flex flex-col mt-4' htmlFor="email">E-mail 
                            <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" type="email" 
                            value={reg.email || ''} 
                            onChange={(e) => setReg({...reg, email: e.target.value})} placeholder="Введите адрес электронной почты" />
                        </label>
                        <label className='flex flex-col mt-4' htmlFor="tel">Телефон 
                            <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" type="tel" 
                            value={reg.phone || ''} 
                            onChange={(e) => setReg({...reg, phone: e.target.value})} placeholder="Введите номер телефона" />
                        </label>
                        <label className='flex flex-col mt-4' htmlFor="password">Пароль
                           <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" 
                           value={reg.password || ''} 
                           onChange={(e) => setReg({...reg, password: e.target.value})} type="password" placeholder="Придумайте пароль" />
                        </label>
                        <label className='flex flex-col mt-4' htmlFor="password">Подтвердите пароль
                           <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" 
                           value={reg.password2 || ''} 
                           onChange={(e) => setReg({...reg, password2: e.target.value})} type="password" placeholder="Подтвердите пароль" />
                        </label>
                        <p className="license my-3.5 mx-auto w-80 text-xs">Продолжая, вы соглашаетесь с <a href="#">Условиями использования</a> и <a href="#">Политикой конфиденциальности.</a></p>
                        <button className="mt-2.5 bg-[#784adc] rounded-xl outline-none border-none cursor-pointer text-white font-normal py-4 px-9"
                        onClick={submit}
                        >Зарегистрироваться</button>
                        <p className="text-xs my-2">У вас есть аккаунт? <Link onClick={showLogin} className="text-[#784adc]" to='/'>Войти</Link></p>
                    </fieldset>
                </form>}
                 
             </div>
                }
        </>
    )
}